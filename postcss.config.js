export default {
    plugins: {
        '@tailwindcss/postcss': {},
        autoprefixer: {}, // Autoprefixer is optional with v4 for most cases but safe to keep or remove. v4 includes lightningcss or handles it? I'll keep it simple. Actually v4 usually just needs @tailwindcss/postcss.
    },
}
