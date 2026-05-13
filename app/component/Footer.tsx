"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-gray-50 mt-auto px-6 py-4">
            <div className="max-w-6xl mx-auto flex items-center justify-between text-xs text-gray-500">
                <p>&copy; 2026 Syed Reejaul Hussain. All rights reserved.</p>
                <Link href="/info" className="hover:text-gray-700 transition underline">
                    Project Info
                </Link>
            </div>
        </footer>
    );
}
