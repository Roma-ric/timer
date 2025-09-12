"use client";

import { useState, useEffect } from "react";
import { CalendarIcon, Clock } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ScrollArea } from "./ui/scroll-area";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const FormSchema = z.object({
  datetime: z.date({
    required_error: "La date et l'heure sont requises",
  }),
});

export default function DateTimePicker({onSelectDate}: {onSelectDate: (date: Date) => void}) {
  const [dateOpen, setDateOpen] = useState(false);
  const [timeOpen, setTimeOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [hours, setHours] = useState("12");
  const [minutes, setMinutes] = useState("00");
  const [timeInput, setTimeInput] = useState("12:00");
  const [timeTab, setTimeTab] = useState("select");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      datetime: selectedDate,
    },
  });

  useEffect(() => {
    const newDate = new Date(selectedDate);
    newDate.setHours(parseInt(hours, 10), parseInt(minutes, 10));
    form.setValue("datetime", newDate);
  }, [selectedDate, hours, minutes, form]);

  useEffect(() => {
    if (timeTab === "manual" && timeInput) {
      const [h, m] = timeInput.split(":").map(val => val.padStart(2, "0"));
      if (h && m) {
        setHours(h);
        setMinutes(m);
      }
    }
  }, [timeInput, timeTab]);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    window.localStorage.setItem("selected_date", data.datetime.toString());
    onSelectDate(data.datetime);
  }

  const hourOptions = Array.from({ length: 24 }, (_, i) => {
    const hourVal = i.toString().padStart(2, "0");
    return (
      <SelectItem key={`hour-${i}`} value={hourVal}>
        {hourVal}h
      </SelectItem>
    );
  });

  const minuteOptions = Array.from({ length: 60 }, (_, i) => {
    const minuteVal = i.toString().padStart(2, "0");
    return (
      <SelectItem key={`minute-${i}`} value={minuteVal}>
        {minuteVal}
      </SelectItem>
    );
  });

  return (
    <div className="w-full max-w-md mx-auto p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl text-center font-bold mb-4">Lancer le décompte</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <FormField
              control={form.control}
              name="datetime"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date de fin</FormLabel>
                  <Popover open={dateOpen} onOpenChange={setDateOpen}>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn( 
                            "w-full justify-start text-left font-normal truncate",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value ? (
                            format(field.value, "EE d / MM / yyyy", { locale: fr })
                          ) : (
                            <span>Sélectionner une date</span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={(date) => {
                          if (date) {
                            setSelectedDate(date);
                            setDateOpen(false);
                          }
                        }}
                        initialFocus
                        locale={fr}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="datetime"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Heure de fin</FormLabel>
                  <Popover open={timeOpen} onOpenChange={setTimeOpen}>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <Clock className="mr-2 h-4 w-4" />
                          {field.value ? (
                            format(field.value, "HH'h'mm")
                          ) : (
                            <span>Sélectionner une heure</span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 p-3" align="start">
                      <Tabs value={timeTab} onValueChange={setTimeTab}>
                        <TabsList className="grid grid-cols-2 mb-4">
                          <TabsTrigger value="select">Sélection</TabsTrigger>
                          <TabsTrigger value="manual">Manuel</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="select">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <FormLabel>Heures</FormLabel>
                              <Select
                                value={hours}
                                onValueChange={setHours}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Heures" />
                                </SelectTrigger>
                                <SelectContent>
                                  <ScrollArea className="h-40">
                                    {hourOptions}
                                  </ScrollArea>
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div>
                              <FormLabel>Minutes</FormLabel>
                              <Select
                                value={minutes}
                                onValueChange={setMinutes}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Minutes" />
                                </SelectTrigger>
                                <SelectContent>
                                  <ScrollArea className="h-40">
                                    {minuteOptions}
                                  </ScrollArea>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="manual">
                          <div>
                            <FormLabel>Entrer l'heure (HH:MM)</FormLabel>
                            <Input
                              type="time"
                              value={timeInput}
                              onChange={(e) => setTimeInput(e.target.value)}
                              className="w-full"
                            />
                          </div>
                        </TabsContent>
                      </Tabs>
                      
                      <div className="flex justify-between mt-4">
                        <Button
                          variant="outline"
                          onClick={() => setTimeOpen(false)}
                        >
                          Annuler
                        </Button>
                        <Button
                          onClick={() => setTimeOpen(false)}
                        >
                          Confirmer
                        </Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full">
            Envoyer
          </Button>
        </form>
      </Form>
    </div>
  );
}