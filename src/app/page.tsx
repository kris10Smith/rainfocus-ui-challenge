import LeftRail from "./components/LeftRail"
import MainContent from "./components/MainContent"

function Page() {
	return (
		<div className="app-root">
			<div className="app-frame">
				<LeftRail />
				<MainContent />
			</div>
		</div>
	)
}

export default Page
