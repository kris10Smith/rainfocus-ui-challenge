function EventHeader() {
	return (
		<header className="event-header">
			<div className="event-title-block">
				<div className="event-icon">
					<img
						src="/img/large-logo.svg"
						alt="RainFocus Summit icon"
					/>
				</div>

				<div className="event-meta">
					<h1 className="event-title text-heading-1">
						RainFocus Summit
					</h1>
					<p className="event-meta-line">December 15th</p>
					<p className="event-meta-line">Lehi, Utah</p>
				</div>
			</div>

			<button
				className="button-primary text-button-primary"
				type="button"
			>
				Edit event
			</button>
		</header>
	)
}

export default EventHeader
