"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calendar, Menu, X, Home, UserPlus } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);

    // Animation to show navbar after page load
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowNavbar(true);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    // Check if user has scrolled to add background
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Navigation items
    const navItems = [
        { icon: Home, name: 'Beranda', path: '/' },
        { icon: Calendar, name: 'Jadwal Dokter', path: '/jadwal' },
    ];

    const isActive = (path: string) => {
        return pathname === path;
    };

    return (
        <div className={`fixed top-0 left-0 w-full z-50 pointer-events-none transition-all duration-700 transform ${showNavbar ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
            {/* Logo - Top Left */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 pointer-events-auto z-10 transition-all duration-500 delay-100">
                <Link href="/" className={`flex items-center space-x-2 p-3 rounded-xl transition-all duration-300 ${isScrolled ? 'bg-white/85 shadow-lg backdrop-blur-md' : 'bg-transparent'
                    }`}>
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-lg shadow-md flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">
                        Jadwal Dokter
                    </span>
                </Link>
            </div>

            {/* Navigation - Center */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 pointer-events-auto transition-all duration-500 delay-200">
                <nav className={`hidden md:flex items-center px-5 py-2.5 space-x-2 rounded-full transition-all duration-300 ${isScrolled ? 'bg-white/85 shadow-lg backdrop-blur-md' : 'bg-transparent'
                    }`}>
                    {navItems.map((item) => {
                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-full transition-colors ${isActive(item.path)
                                    ? 'text-blue-600 bg-blue-50'
                                    : 'text-gray-600 hover:text-blue-600'
                                    }`}
                            >
                                <item.icon className="h-4 w-4" />
                                <span>{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Daftar Button & Mobile Menu - Top Right */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center space-x-2 pointer-events-auto z-10 transition-all duration-500 delay-300">
                {/* Daftar Button - Desktop */}
                <div className="hidden md:block">
                    <div className={`flex items-center px-3 py-2 rounded-full transition-all duration-300 ${isScrolled ? 'bg-white/85 shadow-lg backdrop-blur-md' : 'bg-transparent'
                        }`}>
                        <Link
                            href="/daftar"
                            className={`px-4 py-1.5 text-sm rounded-full font-medium transition-all duration-300 ${isActive('/daftar')
                                ? 'bg-blue-700 text-white shadow-md'
                                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg'
                                }`}
                        >
                            <div className="flex items-center space-x-1">
                                <UserPlus className="h-4 w-4" />
                                <span>Daftar</span>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Mobile menu button */}
                <div className={`md:hidden p-2.5 rounded-full transition-all duration-300 ${isScrolled ? 'bg-white/85 shadow-lg backdrop-blur-md' : 'bg-transparent'
                    }`}>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-600 hover:text-blue-600 flex items-center justify-center"
                        style={{ border: 'none', backgroundColor: 'transparent', padding: '0.5rem' }}
                    >
                        {isMenuOpen ? (
                            <X className="h-5 w-5" aria-hidden="true" />
                        ) : (
                            <Menu className="h-5 w-5" aria-hidden="true" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="absolute top-20 right-4 w-64 md:hidden pt-4 pb-4 px-4 bg-white/90 shadow-lg rounded-xl backdrop-blur-md pointer-events-auto z-50">
                    <div className="space-y-2">
                        {navItems.map((item) => {
                            return (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`flex items-center space-x-3 px-3 py-3 text-base font-medium rounded-full ${isActive(item.path)
                                        ? 'text-blue-600 bg-blue-50'
                                        : 'text-gray-600'
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <item.icon className="h-5 w-5" />
                                    <span>{item.name}</span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Daftar Button - Mobile */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                        <Link
                            href="/daftar"
                            className={`w-full flex items-center justify-center space-x-2 px-4 py-3 text-sm rounded-full font-medium transition-colors ${isActive('/daftar')
                                ? 'bg-blue-700 text-white'
                                : 'bg-blue-600 hover:bg-blue-700 text-white'
                                }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <UserPlus className="h-4 w-4" />
                            <span>Daftar Sekarang</span>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;