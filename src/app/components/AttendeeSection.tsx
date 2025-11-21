type CardBaseProps = {
	icon?: string
	title: string
}

type CardStandardProps = CardBaseProps & {
	body?: string
}

type CardCenteredProps = CardBaseProps

const registrationCards: CardStandardProps[] = [
	{
		icon: "/img/logic-arrow.svg",
		title: "Attendee Registration",
		body: "Start by creating a general registration workflow",
	},
	{
		icon: "/img/logic-arrow.svg",
		title: "Attendee Registration",
		body: "Start by creating a general registration workflow",
	},
	{
		icon: "/img/logic-arrow.svg",
		title: "Attendee Registration",
		body: "Start by creating a general registration workflow",
	},
]

function AttendeeSection() {
	return (
		<section
			className="attendee-section"
			aria-labelledby="attendee-section-heading"
		>
			<div className="attendee-inner-wrapper">
				<div className="attendee-header">
					<div className="attendee-icon">
						<img
							src="/img/person-portal.svg"
							alt=""
							aria-hidden="true"
						/>
					</div>
					<h3
						id="attendee-section-heading"
						className="attendee-title text-heading-3"
					>
						Attendee
					</h3>
				</div>

				{/* Step 1 */}
				<div className="step-row-wrapper">
					<div className="step-heading-row">
						<span className="step-label text-step-label">
							Step 1:
						</span>
						<span className="step-title text-step-title">
							Base settings.
						</span>
					</div>

					<div className="step-row-long">
						<div className="step-row-long-item">
							<div className="text-card-title">General</div>
							<div className="text-card-body">
								Define Attendee types &amp; attributes
							</div>
						</div>
						<div className="step-row-long-item">
							<div className="text-card-title">Title</div>
							<div className="text-card-body">
								Description that explains the value goes here.
								Description that explains the value goes here.
							</div>
						</div>
						<div className="step-row-long-item">
							<div className="text-card-title">Title</div>
							<div className="text-card-body">
								Description that explains the value goes here.
								Description that explains the value goes here.
							</div>
						</div>
					</div>
				</div>

				{/* Step 2 */}
				<div className="step-row-wrapper">
					<div className="step-heading-row">
						<span className="step-label text-step-label">
							Step 2:
						</span>
						<span className="step-title text-step-title">
							Build registration workflows.
						</span>
					</div>

					<div className="step-row-grid">
						{registrationCards.map((card, index) => (
							<CardStandard
								key={`${card.title}-${index}`}
								icon={card.icon}
								title={card.title}
								body={card.body}
							/>
						))}

						<CardCentered
							icon="/img/add-circle-outline.svg"
							title="Add Registration Workflow"
						/>
					</div>
				</div>

				{/* Step 3 */}
				<div className="step-row-wrapper">
					<div className="step-heading-row">
						<span className="step-label text-step-label">
							Step 3:
						</span>
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
						alt=""
						aria-hidden="true"
						className="card-icon"
					/>
				)}
				<div className="text-card-title">{title}</div>
			</div>
			{body && <div className="text-card-body">{body}</div>}
		</div>
	)
}

function CardCentered({ icon, title }: CardCenteredProps) {
	return (
		<div className="card-centered">
			{icon && (
				<img
					src={icon}
					alt=""
					aria-hidden="true"
					className="card-icon"
				/>
			)}
			<div className="text-card-title">{title}</div>
		</div>
	)
}

export default AttendeeSection
