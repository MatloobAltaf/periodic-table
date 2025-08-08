import { ElementCategory } from '../types/element';

export const CATEGORY_COLORS: Record<ElementCategory, { bg: string; border: string; text: string }> = {
  'alkali-metals': {
    bg: 'bg-red-100 dark:bg-red-900/30',
    border: 'border-red-300 dark:border-red-700',
    text: 'text-red-800 dark:text-red-200'
  },
  'alkaline-earth-metals': {
    bg: 'bg-orange-100 dark:bg-orange-900/30',
    border: 'border-orange-300 dark:border-orange-700',
    text: 'text-orange-800 dark:text-orange-200'
  },
  'transition-metals': {
    bg: 'bg-yellow-100 dark:bg-yellow-900/30',
    border: 'border-yellow-300 dark:border-yellow-700',
    text: 'text-yellow-800 dark:text-yellow-200'
  },
  'post-transition-metals': {
    bg: 'bg-green-100 dark:bg-green-900/30',
    border: 'border-green-300 dark:border-green-700',
    text: 'text-green-800 dark:text-green-200'
  },
  'metalloids': {
    bg: 'bg-teal-100 dark:bg-teal-900/30',
    border: 'border-teal-300 dark:border-teal-700',
    text: 'text-teal-800 dark:text-teal-200'
  },
  'nonmetals': {
    bg: 'bg-blue-100 dark:bg-blue-900/30',
    border: 'border-blue-300 dark:border-blue-700',
    text: 'text-blue-800 dark:text-blue-200'
  },
  'halogens': {
    bg: 'bg-indigo-100 dark:bg-indigo-900/30',
    border: 'border-indigo-300 dark:border-indigo-700',
    text: 'text-indigo-800 dark:text-indigo-200'
  },
  'noble-gases': {
    bg: 'bg-purple-100 dark:bg-purple-900/30',
    border: 'border-purple-300 dark:border-purple-700',
    text: 'text-purple-800 dark:text-purple-200'
  },
  'lanthanides': {
    bg: 'bg-pink-100 dark:bg-pink-900/30',
    border: 'border-pink-300 dark:border-pink-700',
    text: 'text-pink-800 dark:text-pink-200'
  },
  'actinides': {
    bg: 'bg-rose-100 dark:bg-rose-900/30',
    border: 'border-rose-300 dark:border-rose-700',
    text: 'text-rose-800 dark:text-rose-200'
  }
};

export const CATEGORY_NAMES: Record<ElementCategory, string> = {
  'alkali-metals': 'Alkali Metals',
  'alkaline-earth-metals': 'Alkaline Earth Metals',
  'transition-metals': 'Transition Metals',
  'post-transition-metals': 'Post-Transition Metals',
  'metalloids': 'Metalloids',
  'nonmetals': 'Nonmetals',
  'halogens': 'Halogens',
  'noble-gases': 'Noble Gases',
  'lanthanides': 'Lanthanides',
  'actinides': 'Actinides'
};