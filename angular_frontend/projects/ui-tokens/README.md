# ui-tokens (Angular 19 library)

Purpose
- SCSS/CSS design tokens
- Theme classes (emerald, yellow)
- Runtime theme switching service
- Base utilities (reset, icon font)

Usage
1) Add one of the theme classes to the document root:
   <body class="theme-emerald"> or <body class="theme-yellow">

2) Provide ThemeTokenService in your app to switch at runtime:
   constructor(private tokens: ThemeTokenService) {}
   this.tokens.setTheme('emerald');

3) Import the global styles in your application styles if desired:
   @use 'projects/ui-tokens/styles/themes/emerald.css';

Exports
- ThemeTokenService
- CSS under styles/ (emerald, yellow, reset, icons)
