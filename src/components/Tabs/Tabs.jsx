import "./Tabs.css";

export default function Tabs() {
    return (
    <div className="tab-bar">
		<div className="tab">
		    <span className="badge">3</span>
			<span className="tab-label">All Entries</span>
		</div>
		<div className="tab">
			<span className="badge">1</span>
			<span className="tab-label">Favorites</span>
		</div>
	</div>
    );
};