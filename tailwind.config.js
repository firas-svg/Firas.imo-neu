/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                neon: {
                    blue: '#3b82f6',
                    purple: '#9333ea',
                    pink: '#ec4899',
                },
                dark: {
                    900: '#0f172a',
                    800: '#1e293b',
                    700: '#334155',
                }
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float 8s ease-in-out infinite',
                'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
                'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
                    '50%': { transform: 'translateY(-20px) rotate(5deg)' },
                },
                'glow-pulse': {
                    '0%, 100%': {
                        boxShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
                        opacity: '1'
                    },
                    '50%': {
                        boxShadow: '0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.5)',
                        opacity: '0.9'
                    },
                },
                'fade-in-up': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(30px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                }
            }
        },
    },
    plugins: [],
}
