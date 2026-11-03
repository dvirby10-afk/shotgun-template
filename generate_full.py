content = "import { useState } from 'react'\nimport heroImg from './assets/hero.png'\nimport reactLogo from './assets/react.svg'\nimport viteLogo from './assets/vite.svg'\nimport './App.css'\n\nfunction App() {\n  const [activeUsers, setActiveUsers] = useState(1000)\n  const [planPrice, setPlanPrice] = useState(29)\n  const [conversionRate, setConversionRate] = useState(5)\n"
with open('w:\\work\\shotgun-template\\src\\App.tsx', 'w') as f:
    f.write(content)
print('Part 1 written')