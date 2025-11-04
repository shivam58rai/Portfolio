export default function Skills() {
	return (
		<section id="skills" className="mx-auto max-w-6xl px-4 py-16">
			<h2 className="text-2xl md:text-3xl font-semibold text-slate-800">Skills</h2>
			<div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
				{[
					{ name: 'HTML', icon: '🟧' },
					{ name: 'CSS', icon: '🟦' },
					{ name: 'JavaScript', icon: '🟨' },
					{ name: 'React', icon: '⚛️' },
					{ name: 'Node.js', icon: '🟩' },
					{ name: 'MongoDB', icon: '🍃' },
					{ name: 'Git', icon: '🔧' },
					{ name: 'Linux', icon: '🐧' },
				].map((s) => (
					<div key={s.name} className="group flex items-center gap-3 rounded-lg border border-slate-200 p-4 hover:shadow-md hover:border-indigo-500 bg-white animate-fadeInUp transition-all cursor-default">
						<span className="h-6 w-6">{s.icon}</span>
						<span className="text-sm font-medium text-slate-900 group-hover:text-indigo-500 transition-colors">{s.name}</span>
					</div>
				))}
			</div>
		</section>
	);
}
