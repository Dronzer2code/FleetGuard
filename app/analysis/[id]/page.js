"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../../lib/firebase";
import Link from "next/link";

export default function AnalysisResultPage({ params }) {
	const { id: inspectionId } = use(params);
	const router = useRouter();
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			if (!currentUser) {
				router.push("/login");
			} else {
				setUser(currentUser);
				fetchInspectionData(currentUser);
			}
		});
		return () => unsubscribe();
	}, [router, inspectionId]);

	const fetchInspectionData = async (currentUser) => {
		try {
			const docRef = doc(db, "inspections", inspectionId);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				setData(docSnap.data());
			} else {
				console.log("No such document!");
				// Handle not found
			}
		} catch (error) {
			console.error("Error getting document:", error);
		} finally {
			setLoading(false);
		}
	};

	if (loading) {
		return (
			<div className="loading-screen">
				<div className="spinner"></div>
				<p>Loading Analysis...</p>
			</div>
		);
	}

	if (!data) {
		return (
			<div className="error-screen">
				<h1>Report Not Found</h1>
				<Link href="/dashboard" className="btn btn-primary">
					Return to Dashboard
				</Link>
			</div>
		);
	}

	const { analysis, vehicleName, licensePlate, submittedAt } = data;
	const healthScore = analysis.overallHealthScore || 0;

	const getScoreColor = (score) => {
		if (score >= 80) return "var(--color-success)";
		if (score >= 50) return "var(--color-warning)";
		return "var(--color-danger)";
	};

	return (
		<div className="analysis-page">
			<header className="analysis-header">
				<div className="header-content">
					<Link href="/dashboard" className="back-link">
						<i className="fa-solid fa-arrow-left"></i> Dashboard
					</Link>
					<div className="vehicle-identity">
						<h1>{vehicleName}</h1>
						<span className="plate-badge">{licensePlate}</span>
					</div>
					<div className="date-badge">
						<i className="fa-regular fa-calendar"></i>
						{new Date(submittedAt?.seconds * 1000).toLocaleDateString()}
					</div>
				</div>
			</header>

			<main className="analysis-content">
				{/* Top Overview Section */}
				<section className="overview-grid">
					<div className="score-card">
						<h3>Overall Health Score</h3>
						<div
							className="score-circle"
							style={{ borderColor: getScoreColor(healthScore) }}
						>
							<span
								className="score-value"
								style={{ color: getScoreColor(healthScore) }}
							>
								{healthScore}
							</span>
							<span className="score-label">/ 100</span>
						</div>
						<p className="score-summary">{analysis.vehicleSummary}</p>
					</div>

					<div className="cost-card">
						<h3>Estimated Repair Costs</h3>
						<div className="cost-breakdown">
							<div className="cost-item urgent">
								<span>Immediate</span>
								<strong>
									₹{analysis.costSummary?.immediate?.min} - ₹
									{analysis.costSummary?.immediate?.max}
								</strong>
							</div>
							<div className="cost-item upcoming">
								<span>Upcoming</span>
								<strong>
									₹{analysis.costSummary?.upcoming?.min} - ₹
									{analysis.costSummary?.upcoming?.max}
								</strong>
							</div>
							<div className="cost-total">
								<span>Total Est.</span>
								<strong>
									₹{analysis.costSummary?.total?.min} - ₹
									{analysis.costSummary?.total?.max}
								</strong>
							</div>
						</div>
					</div>
				</section>

				{/* Critical Issues Section */}
				{analysis.criticalIssues?.length > 0 && (
					<section className="critical-section">
						<div className="section-title danger">
							<i className="fa-solid fa-triangle-exclamation"></i>
							<h2>Critical Attention Required</h2>
						</div>
						<div className="issues-list">
							{analysis.criticalIssues.map((issue, index) => (
								<div key={index} className="issue-card critical">
									<div className="issue-header">
										<h4>{issue.title}</h4>
										<span className="priority-badge">
											PRIORITY {issue.priority}
										</span>
									</div>
									<p className="issue-desc">{issue.description}</p>
									<div className="issue-meta">
										<span className="reasoning">
											<strong>Why:</strong> {issue.reasoning}
										</span>
										<span className="cost">
											<strong>Est:</strong> ₹{issue.estimatedCost?.min} - ₹
											{issue.estimatedCost?.max}
										</span>
									</div>
								</div>
							))}
						</div>
					</section>
				)}

				{/* System Health Grid */}
				<section className="systems-section">
					<h2>System Health Breakdown</h2>
					<div className="systems-grid">
						{Object.entries(analysis.systemHealth || {}).map(
							([system, data]) => (
								<div key={system} className="system-card">
									<div className="system-header">
										<h3 style={{ textTransform: "capitalize" }}>{system}</h3>
										<span
											className={`status-dot ${
												data.status.toLowerCase().includes("good")
													? "good"
													: "bad"
											}`}
										></span>
									</div>
									<div className="progress-bar">
										<div
											className="fill"
											style={{
												width: `${data.score}%`,
												backgroundColor: getScoreColor(data.score),
											}}
										></div>
									</div>
									<ul className="system-issues">
										{data.issues?.length > 0 ? (
											data.issues.map((issue, i) => <li key={i}>{issue}</li>)
										) : (
											<li className="no-issues">
												<i className="fa-solid fa-check"></i> No issues detected
											</li>
										)}
									</ul>
								</div>
							)
						)}
					</div>
				</section>

				{/* Maintenance Schedule */}
				<div className="maintenance-grid">
					<section className="maintenance-section">
						<h2>Upcoming Maintenance</h2>
						<ul className="maintenance-list">
							{analysis.upcomingMaintenance?.map((item, index) => (
								<li key={index} className="maintenance-item">
									<i className="fa-regular fa-clock"></i>
									<div className="maintenance-details">
										<strong>
											{typeof item === "object" ? item.title : item}
										</strong>
										{typeof item === "object" && item.description && (
											<p className="maintenance-desc">{item.description}</p>
										)}
										{typeof item === "object" && item.timeline && (
											<span className="maintenance-timeline">
												{item.timeline}
											</span>
										)}
									</div>
								</li>
							))}
						</ul>
					</section>

					<section className="maintenance-section">
						<h2>AI Insights</h2>
						<div className="insights-list">
							{analysis.aiInsights?.map((insight, index) => (
								<div key={index} className="insight-item">
									<strong>{insight.title || insight.type}</strong>
									<p>{insight.description}</p>
								</div>
							))}
						</div>
					</section>
				</div>

				{/* Photos Section */}
				{data.photos && (
					<section className="photos-section">
						<h2>Inspection Photos</h2>
						<div className="photos-grid">
							{Object.entries(data.photos).map(
								([category, urls]) =>
									urls &&
									urls.length > 0 && (
										<div key={category} className="photo-category">
											<h3
												style={{
													textTransform: "capitalize",
													marginBottom: "1rem",
													fontSize: "1rem",
													color: "var(--text-light)",
												}}
											>
												{category.replace(/([A-Z])/g, " $1").trim()}
											</h3>
											<div className="category-photos">
												{urls.map((url, index) => (
													<a
														key={index}
														href={url}
														target="_blank"
														rel="noopener noreferrer"
														className="photo-link"
													>
														<img
															src={url}
															alt={`${category} ${index + 1}`}
															className="inspection-photo"
														/>
													</a>
												))}
											</div>
										</div>
									)
							)}
						</div>
					</section>
				)}
			</main>

			<style jsx>{`
				.analysis-page {
					min-height: 100vh;
					background: var(--bg-body);
					padding-bottom: 4rem;
				}
				.analysis-header {
					background: var(--bg-surface);
					padding: 1.5rem 2rem;
					box-shadow: var(--shadow-sm);
					position: sticky;
					top: 0;
					z-index: 10;
				}
				.header-content {
					max-width: var(--container-width);
					margin: 0 auto;
					display: flex;
					align-items: center;
					justify-content: space-between;
				}
				.back-link {
					color: var(--text-light);
					text-decoration: none;
					display: flex;
					align-items: center;
					gap: 0.5rem;
					font-weight: 500;
				}
				.vehicle-identity {
					text-align: center;
				}
				.vehicle-identity h1 {
					font-size: 1.5rem;
					color: var(--text-heading);
				}
				.plate-badge {
					background: var(--bg-surface-alt);
					padding: 0.25rem 0.75rem;
					border-radius: 4px;
					font-family: monospace;
					font-weight: 700;
					border: 1px solid #e2e8f0;
				}
				.date-badge {
					display: flex;
					align-items: center;
					gap: 0.5rem;
					color: var(--text-light);
				}

				.analysis-content {
					max-width: var(--container-width);
					margin: 2rem auto;
					padding: 0 2rem;
					display: flex;
					flex-direction: column;
					gap: 2rem;
				}

				.overview-grid {
					display: grid;
					grid-template-columns: 1fr 1fr;
					gap: 2rem;
				}
				.score-card,
				.cost-card {
					background: var(--bg-surface);
					padding: 2rem;
					border-radius: var(--radius-md);
					box-shadow: var(--shadow-md);
					text-align: center;
				}
				.score-circle {
					width: 120px;
					height: 120px;
					border-radius: 50%;
					border: 8px solid;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					margin: 1.5rem auto;
				}
				.score-value {
					font-size: 2.5rem;
					font-weight: 800;
					line-height: 1;
				}
				.score-label {
					font-size: 0.875rem;
					color: var(--text-light);
				}
				.score-summary {
					color: var(--text-main);
					font-style: italic;
				}

				.cost-breakdown {
					display: flex;
					flex-direction: column;
					gap: 1rem;
					margin-top: 1.5rem;
				}
				.cost-item {
					display: flex;
					justify-content: space-between;
					padding: 0.75rem;
					background: var(--bg-surface-alt);
					border-radius: var(--radius-sm);
				}
				.cost-item.urgent {
					border-left: 4px solid var(--color-danger);
				}
				.cost-item.upcoming {
					border-left: 4px solid var(--color-warning);
				}
				.cost-total {
					display: flex;
					justify-content: space-between;
					padding-top: 1rem;
					border-top: 1px solid #e2e8f0;
					font-size: 1.25rem;
					color: var(--text-heading);
				}

				.critical-section {
					background: #fef2f2;
					border: 1px solid #fee2e2;
					border-radius: var(--radius-md);
					padding: 2rem;
				}
				.section-title.danger {
					color: var(--color-danger);
					display: flex;
					align-items: center;
					gap: 0.75rem;
					margin-bottom: 1.5rem;
				}
				.issues-list {
					display: grid;
					gap: 1rem;
				}
				.issue-card {
					background: white;
					padding: 1.5rem;
					border-radius: var(--radius-sm);
					border-left: 4px solid var(--color-danger);
					box-shadow: var(--shadow-sm);
				}
				.issue-header {
					display: flex;
					justify-content: space-between;
					margin-bottom: 0.5rem;
				}
				.issue-header h4 {
					font-size: 1.1rem;
					color: var(--text-heading);
				}
				.priority-badge {
					background: var(--color-danger);
					color: white;
					padding: 0.25rem 0.5rem;
					border-radius: 4px;
					font-size: 0.75rem;
					font-weight: 700;
				}
				.issue-meta {
					margin-top: 1rem;
					display: flex;
					gap: 2rem;
					font-size: 0.9rem;
					color: var(--text-light);
				}
				.issue-meta strong {
					color: var(--text-main);
				}

				.systems-grid {
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
					gap: 1.5rem;
					margin-top: 1rem;
				}
				.system-card {
					background: var(--bg-surface);
					padding: 1.5rem;
					border-radius: var(--radius-md);
					box-shadow: var(--shadow-sm);
				}
				.system-header {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 1rem;
				}
				.status-dot {
					width: 10px;
					height: 10px;
					border-radius: 50%;
				}
				.status-dot.good {
					background: var(--color-success);
				}
				.status-dot.bad {
					background: var(--color-danger);
				}
				.progress-bar {
					height: 6px;
					background: var(--bg-surface-alt);
					border-radius: 3px;
					margin-bottom: 1rem;
					overflow: hidden;
				}
				.fill {
					height: 100%;
					border-radius: 3px;
				}
				.system-issues {
					list-style: none;
					font-size: 0.9rem;
					color: var(--text-main);
				}
				.system-issues li {
					margin-bottom: 0.5rem;
					padding-left: 1.25rem;
					position: relative;
				}
				.system-issues li::before {
					content: "•";
					position: absolute;
					left: 0;
					color: var(--color-danger);
				}
				.system-issues li.no-issues {
					padding-left: 0;
					color: var(--color-success);
				}
				.system-issues li.no-issues::before {
					content: none;
				}

				.maintenance-grid {
					display: grid;
					grid-template-columns: 1fr 1fr;
					gap: 2rem;
				}
				.maintenance-section {
					background: var(--bg-surface);
					padding: 2rem;
					border-radius: var(--radius-md);
					box-shadow: var(--shadow-sm);
				}
				.maintenance-section h2 {
					margin-bottom: 1.5rem;
					font-size: 1.25rem;
				}
				.maintenance-list {
					list-style: none;
				}
				.maintenance-list li {
					display: flex;
					align-items: flex-start;
					gap: 1rem;
					padding: 0.75rem 0;
					border-bottom: 1px solid var(--bg-surface-alt);
				}
				.maintenance-list li i {
					color: var(--color-accent);
					margin-top: 0.25rem;
				}
				.maintenance-details {
					flex: 1;
				}
				.maintenance-details strong {
					display: block;
					color: var(--text-heading);
					margin-bottom: 0.25rem;
				}
				.maintenance-desc {
					font-size: 0.85rem;
					color: var(--text-light);
					margin: 0.25rem 0;
				}
				.maintenance-timeline {
					font-size: 0.8rem;
					color: var(--color-accent);
					font-weight: 500;
				}

				.insight-item {
					background: var(--bg-surface-alt);
					padding: 1rem;
					border-radius: var(--radius-sm);
					margin-bottom: 1rem;
				}
				.insight-item strong {
					display: block;
					margin-bottom: 0.5rem;
					color: var(--color-accent);
				}
				.insight-item p {
					font-size: 0.9rem;
					color: var(--text-main);
				}

				.loading-screen,
				.error-screen {
					height: 100vh;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					gap: 1rem;
				}
				.spinner {
					width: 40px;
					height: 40px;
					border: 4px solid var(--bg-surface-alt);
					border-top-color: var(--color-accent);
					border-radius: 50%;
					animation: spin 1s linear infinite;
				}
				@keyframes spin {
					to {
						transform: rotate(360deg);
					}
				}

				.photos-section {
					background: var(--bg-surface);
					padding: 2rem;
					border-radius: var(--radius-md);
					box-shadow: var(--shadow-sm);
				}
				.photos-section h2 {
					margin-bottom: 1.5rem;
				}
				.category-photos {
					display: flex;
					gap: 1rem;
					flex-wrap: wrap;
					margin-bottom: 2rem;
				}
				.photo-link {
					display: block;
					width: 150px;
					height: 150px;
					border-radius: var(--radius-sm);
					overflow: hidden;
					border: 1px solid var(--bg-surface-alt);
					transition: transform 0.2s;
				}
				.photo-link:hover {
					transform: scale(1.05);
				}
				.inspection-photo {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			`}</style>
		</div>
	);
}
