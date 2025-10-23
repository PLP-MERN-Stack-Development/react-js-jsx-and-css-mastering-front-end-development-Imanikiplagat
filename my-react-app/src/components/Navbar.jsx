import { useContext } from 'react';
import { ThemeContext } from '../context/Themecontext';
import Button from './Button';
export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="w-full border-b bg-white dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-4xl mx-auto flex items-center justify-between p-4">
        <div className="font-bold">MyApp</div>
        <div className="flex gap-3 items-center">
          <a href="/" className="hidden md:inline">Home</a>
          <a href="/api" className="hidden md:inline">API</a>
          <Button onClick={toggleTheme} variant="secondary">
             {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </Button>

        </div>
      </div>
    </nav>
  );
}
