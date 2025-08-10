"use client";

import Link from "next/link";

interface AdminNavButtonProps {
  className?: string;
}

export default function AdminNavButton({ className = "" }: AdminNavButtonProps) {
  return (
    <Link
      href="/admin"
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 ${className}`}
    >
      Admin
    </Link>
  );
}
