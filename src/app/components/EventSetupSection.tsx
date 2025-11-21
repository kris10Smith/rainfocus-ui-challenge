import AttendeeSection from "./AttendeeSection"

function EventSetupSection() {
	return (
		<section className="event-setup-section">
			<div className="event-setup-header">
				<h2 className="event-setup-title text-heading-2">
					Event setup guide
				</h2>
				<p className="event-setup-description text-body">
					See the available list of modules below. We suggest that you
					start with the attendee module.
				</p>
			</div>

			<AttendeeSection />
		</section>
	)
}

export default EventSetupSection
