import React from "react"

type CardStandardProps = {
	icon?: string
	title: string
	body?: string
}

type CardCenteredProps = {
	icon?: string
	title: string
}

function Page() {
	return (
		<div className="app-root">
			<div className="app-frame">
				<LeftRail />
				<PageBody />
			</div>
		</div>
	)
}

function LeftRail() {
	return (
		<aside className="left-rail">
			<div className="left-rail-top">
				<div className="left-rail-logo-main">
					<img
						src="/img/rf-logo.svg"
						alt="RainFocus"
						className="left-rail-logo-main-img"
					/>
				</div>

				<div className="left-rail-logo-secondary">
					<div
						className="left-rail-logo-secondary-img"
						style={{ backgroundImage: "url(/img/small-logo.svg)" }}
					/>
				</div>
			</div>

			<div className="left-rail-user">
				<span>FL</span>
			</div>
		</aside>
	)
}

function PageBody() {
	return (
		<main className="page-body">
			<EventHeader />
			<EventSetupSection />
		</main>
	)
}

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
					<p className="event-meta-line">
						December 15th
					</p>
					<p className="event-meta-line">
						Lehi, Utah
					</p>
				</div>
			</div>

			<button className="button-primary text-button-primary" type="button">
				Edit event
			</button>
		</header>
	)
}

function EventSetupSection() {
	return (
		<section className="event-setup-section">
			<div className="event-setup-header">
				<h2 className="event-setup-title text-heading-2">
					Event setup guide
				</h2>
				<p className="event-setup-description text-body">
					See the available list of modules below. We suggest that you start with the attendee module.
				</p>
			</div>

			<AttendeeSection />
		</section>
	)
}

function AttendeeSection() {
	return (
		<section className="attendee-section">
			<div className="attendee-inner-wrapper">
				<div className="attendee-header">
					<div className="attendee-icon">
						<img
							src="/img/person-portal.svg"
							alt="Person Portal Icon"
						/>
					</div>
					<h3 className="attendee-title text-heading-3">
						Attendee
					</h3>
				</div>
	
				{/* Step 1 */}
				<div className="step-row-wrapper">
					<div className="step-heading-row">
						<span className="step-label text-step-label">Step 1:</span>
						<span className="step-title text-step-title">Base settings.</span>
					</div>
	
					<div className="step-row-long">
						<div className="step-row-long-item">
							<div className="text-card-title">
								General
							</div>
							<div className="text-card-body">
								Define Attendee types &amp; attributes
							</div>
						</div>
						<div className="step-row-long-item">
							<div className="text-card-title">
								Title
							</div>
							<div className="text-card-body">
								Description that explains the value goes here. Description that explains the value goes here.
							</div>
						</div>
						<div className="step-row-long-item">
							<div className="text-card-title">
								Title
							</div>
							<div className="text-card-body">
								Description that explains the value goes here. Description that explains the value goes here.
							</div>
						</div>
					</div>
				</div>
	
				{/* Step 2 */}
				<div className="step-row-wrapper">
					<div className="step-heading-row">
						<span className="step-label text-step-label">Step 2:</span>
						<span className="step-title text-step-title">
							Build registration workflows.
						</span>
					</div>
	
					<div className="step-row-grid">
						<CardStandard
							icon="/img/logic-arrow.svg"
							title="Attendee Registration"
							body="Start by creating a general registration workflow"
						/>
						<CardStandard
							icon="/img/logic-arrow.svg"
							title="Attendee Registration"
							body="Start by creating a general registration workflow"
						/>
						<CardStandard
							icon="/img/logic-arrow.svg"
							title="Attendee Registration"
							body="Start by creating a general registration workflow"
						/>
						<CardCentered
							icon="/img/add-circle-outline.svg"
							title="Add Registration Workflow"
						/>
					</div>
				</div>
	
				{/* Step 3 */}
				<div className="step-row-wrapper">
					<div className="step-heading-row">
						<span className="step-label text-step-label">Step 3:</span>
						<span className="step-title text-step-title">
							Design post-registration experiences.
						</span>
					</div>
	
					<div className="step-row-single">
						<CardStandard
							icon="/img/computer.svg"
							title="Attendee Portal"
							body="Manage the portal that attendees will see after they’ve register for your event."
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

function CardStandard({ icon, title, body }: CardStandardProps) {
	return (
		<div className="card-standard">
			<div className="card-title-wrapper">
				{icon && (
					<img
						src={icon}
						alt="Card Icon"
						className="card-icon"
					/>
				)}
				<div className="text-card-title">
					{title}
				</div>
			</div>	
			{body && (
				<div className="text-card-body">
					{body}
				</div>
			)}
		</div>
	)
}

function CardCentered({ icon, title }: CardCenteredProps) {
	return (
		<div className="card-centered">
			{icon && (
				<img
					src={icon}
					alt="Card Icon"
				/>
			)}
			<div className="text-card-title">
				{title}
			</div>
		</div>
	)
}

export default Page
