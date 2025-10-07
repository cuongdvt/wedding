import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        'header': "#4472C4"
      },
      fontFamily: {
        icielnovecentosans: 'var(--font-icielnovecentosans)',
        begatri: 'var(--font-begatri)'
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
} satisfies Config;