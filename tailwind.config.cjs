/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '0rem'
			},
		},
		extend: {
			lineHeight: {
				'tight': '1rem',
				'1': '1.125rem',
				'2': '1.313rem',
				'3': '1.5rem',
				'4': '1.688rem',
				'5': '1.875rem',
				'6': '2rem',
				'7': '2.25rem',
				'8': '2.75rem',
				'9': '2.875rem',
				'10': '3.375rem',
				'11': '3.5rem',
				'12': '4.5rem',
				'13': '4.625rem',
			},
			padding: {
				'1.125rem': '1.125rem',
				'1.875rem': '1.875rem',
			}
		},
		screens: {
			'sm': '640px',
			// => @media (min-width: 640px) { ... }
			'md': '768px',
			// => @media (min-width: 768px) { ... }
			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }
			'xl': '1024px',
			// => @media (min-width: 1280px) { ... } Josip wants this to be 1280, but the mockups haven't been updated
		},
		fontFamily: {
			'display': ['Poppins', 'sans-serif'],
			'body': ['Roboto', 'sans-serif'],
			'icon': ['icomoon'],
			'mce-ico': ['dashicons']
		},
		fontSize: {
			'xs': ['.75rem', {
				lineHeight: '1.125rem',
			}],
			'sm': ['.875rem', {
				lineHeight: '1.313rem',
			}],
			'lead': ['1.375rem', {
				lineHeight: '2.25rem',
			}],
			'base': ['1rem', {
				lineHeight: '1.5rem',
			}],
			'lg': ['1.125rem', {
				lineHeight: '1.688rem',
			}],
			'xl': ['1.25rem', {
				lineHeight: '1.875rem',
			}],
			'2xl': ['1.5rem', {
				lineHeight: '2.25rem',
			}],
			'3xl': ['1.875rem', {
				lineHeight: '2.813rem',
			}],
			'4xl': ['2.25rem', {
				lineHeight: '3.375rem',
			}],
			'5xl': ['3rem', {
				lineHeight: '4.5rem',
			}],
			'6xl': ['4rem', {
				lineHeight: '6rem',
			}],
		},
		container: {
			padding: {
				DEFAULT: '1rem',
			},
		},
		listStyleType: {
			list: 'none',
			disc: 'none',
			decimal: 'decimal',
			square: 'square',
			roman: 'upper-roman',
		},
		borderRadius: {
			'none': '0',
			'xs': '0.5rem',
			'sm': '0.625rem',
			'md': '0.375rem',
			DEFAULT: '0.75rem',
			DEFAULT: '12px',
			'lg': '0.875rem',
			'xl': '0.875rem',
			'full': '9999px',
			'2xl': '1rem',
			'3xl': '1.875rem',
		},
		colors: {
			'white': '#ffffff',
			'black': '#000000',
			'gray': {
				50: '#F3F4F5',
				100: '#CCCCCC',
				200: '#999999',
				300: '#666666',
				900: '#222222',
			},
			'primary-green': '#A5BE00',
			'light-green': '#F8FAEB',
			'green': {
				50: '#f2f5db',
				100: '#F8FAEB',
				300: '#DEE7A5',
				400: '#A9C52F',
				500: '#A5BE00',
				600: '#98B50B',
				700: '#7AA125',
				800: '#6F931E',
				900: '#3F5310',
			},
			'primary-blue': '#05668D',
			'light-blue': '#EBF4FA',
			'blue': {
				100: '#EBF4FA',
				800: '#05668D',
				900: '#033F58',
				950: '#182C3A',
			},
			'orange': {
				50: '#FFFAEE',
				700: '#FD7244',
				900: '#672E1C',
			},
			'yellow-50': '#F9F5F0',
			'brown': {
				100: '#F4F2F2',
			},
		},
	},
	plugins: [],
}
