import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// Surveillance Color System
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				surface: 'hsl(var(--surface))',
				'surface-foreground': 'hsl(var(--surface-foreground))',
				
				// Core Palette
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					hover: 'hsl(var(--primary-hover))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					subtle: 'hsl(var(--accent-subtle))'
				},
				
				// Terminal System
				terminal: {
					DEFAULT: 'hsl(var(--terminal))',
					foreground: 'hsl(var(--terminal-foreground))',
					accent: 'hsl(var(--terminal-accent))'
				},
				
				// HUD Elements
				hud: {
					grid: 'hsl(var(--hud-grid))',
					overlay: 'hsl(var(--hud-overlay))'
				},
				
				// Border System
				border: {
					DEFAULT: 'hsl(var(--border))',
					accent: 'hsl(var(--border-accent))'
				},
				divider: 'hsl(var(--divider))',
				
				// States
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				
				// Legacy support (keeping minimal compatibility)
				input: 'hsl(var(--border))',
				ring: 'hsl(var(--border-accent))',
				card: {
					DEFAULT: 'hsl(var(--surface))',
					foreground: 'hsl(var(--surface-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--surface))',
					foreground: 'hsl(var(--surface-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--accent-subtle))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				surveillance: ['Oswald', 'Arial Narrow', 'sans-serif'],
				terminal: ['JetBrains Mono', 'Courier New', 'monospace'],
				mono: ['JetBrains Mono', 'Courier New', 'monospace']
			},
			borderRadius: {
				surveillance: 'var(--radius-surveillance)',
				minimal: 'var(--radius-minimal)',
				lg: 'var(--radius-minimal)',
				md: 'calc(var(--radius-minimal) - 1px)',
				sm: '1px'
			},
			animation: {
				// Surveillance Animations
				'scan': 'scan 2s linear infinite',
				'glitch': 'glitch 120ms linear',
				'nav-glitch': 'nav-glitch 120ms linear',
				'pulse-status': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				
				// Enhanced existing animations
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			keyframes: {
				// Surveillance Keyframes
				'scan': {
					'0%': { left: '-100%' },
					'100%': { left: '100%' }
				},
				'glitch': {
					'0%, 100%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-1px, 1px)' },
					'40%': { transform: 'translate(-1px, -1px)' },
					'60%': { transform: 'translate(1px, 1px)' },
					'80%': { transform: 'translate(1px, -1px)' }
				},
				'nav-glitch': {
					'0%, 100%': { transform: 'scaleX(1)' },
					'50%': { transform: 'scaleX(1.02) skewX(-2deg)' }
				},
				'pulse': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.3' }
				},
				
				// Existing keyframes
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
