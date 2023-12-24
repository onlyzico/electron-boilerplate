module.exports = {
  content: ['src/renderer/index.html', 'src/renderer/**/*.{js,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...require('tailwindcss/defaultTheme').fontFamily.sans]
      }
    }
  }
}
