import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			clipPath: {
				basic: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
				shape: 'polygon(100% 0, 90% 50%, 100% 100%, 0 100%, 0 0)',
				box: 'polygon(100% 0, 100% 100%, 90% 100%, 80% 50%, 90% 0)',
				bookmark: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)'
			},
			animation: {
				'slide-left': 'slideLeft 0.5s ease-in-out',
				'flash': 'flash 1s infinite',
				'ping': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
				'page-flip-forward': 'page-flip-forward 1s ease-in-out',
				'page-flip-backward': 'page-flip-backward 1s ease-in-out'
			},
			keyframes: {
				slideLeft: {
					'0%': {
						transform: 'translateX(100%)'
					},
					'100%': {
						transform: 'translateX(0)'
					}
				},
				flash: {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.5'
					}
				},
				ping: {
					'75%, 100%': {
						transform: 'scale(1.2)',
						opacity: '0',
					},
				},
				'page-flip-forward': {
					'0%': { transform: 'rotateY(0deg)' },
					'100%': { transform: 'rotateY(-180deg)' }
				},
				'page-flip-backward': {
					'0%': { transform: 'rotateY(0deg)' },
					'100%': { transform: 'rotateY(180deg)' }
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			screens: {
				scr_0: {
					max: "1430px",
				},
				scr_1: {
					min: "1390px",
				},
				scr_1_0: {
					max: "1300px",
				},
				scr_1_1: {
					min: "1300px",
				},
				scr_1_2: {
					max: "1285px",
				},
				scr_1_3: {
					min: "1200px",
				},
				scr_2: {
					max: "1200px",
				},
				scr_2_: {
					max: "1024px",
				},
				scr_2_0: {
					max: "1100px",
				},
				scr_2_1: {
					max: "945px",
				},
				scr_2_2: {
					max: "850px",
				},
				scr_3: {
					max: "780px",
				},
				scr_3_O: {
					max: "700px",
				},
				scr_3_0: {
					max: "767.5px",
				},
				scr_3_1: {
					max: "650px",
				},
				scr_3_2: {
					max: "600px",
				},
				scr_4: {
					max: "575px",
				},
				scr_4_0: {
					max: "500px",
				},
				scr_4_1: {
					max: "475px",
				},
				scr_4_2: {
					max: "445px",
				},
				scr_4_3: {
					max: "400px",
				},
				scr_5: {
					max: "370px",
				},
				scr_5_1: {
					max: "330px",
				},
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config; 