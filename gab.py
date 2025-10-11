import streamlit as st
import time
import pandas as pd
from pathlib import Path

# --- Configuration ---
# Set the page title and favicon
st.set_page_config(
    page_title="Sensyva AI | 95% Data Gap Audit",
    page_icon="⚡",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# --- Core Calculation Logic ---

# Use st.cache_data to memoize the function, making the app faster
@st.cache_data
def calculate_sensyva_impact_generalized(
    annual_maintenance_budget_crores: float,
    unplanned_downtime_hours: float,
    revenue_loss_per_hour_lakhs: float,
):
    """
    Calculates the potential savings and impact of Sensyva AI for general industrial operations.

    Args:
        annual_maintenance_budget_crores (float): Estimated annual budget for maintenance/repairs in Crores INR.
        unplanned_downtime_hours (float): Approximately how many unplanned downtime hours experienced per year.
        revenue_loss_per_hour_lakhs (float): Estimated revenue/production loss per hour of downtime in Lakhs INR.

    Returns:
        dict: A dictionary containing potential savings and insights.
    """

    # --- Sensyva's Proven Impact Percentages (Generalized and Defensible) ---
    # These values (65% and 70%) should be updated based on your average POC performance.
    MAINTENANCE_REDUCTION_PERCENTAGE = 0.65
    DOWNTIME_REDUCTION_PERCENTAGE = 0.70

    # --- Calculations ---

    # 1. Potential Maintenance Cost Savings (Direct)
    potential_maintenance_savings = annual_maintenance_budget_crores * MAINTENANCE_REDUCTION_PERCENTAGE

    # 2. Estimated Total Downtime Cost & Potential Savings
    # Convert Lakhs/hour to Crores/hour for consistent unit output
    revenue_loss_per_hour_crores = revenue_loss_per_hour_lakhs / 100.0

    # Total Downtime Cost (Crores) = Hours * Revenue Loss (Crores/Hour)
    estimated_total_downtime_cost_crores = unplanned_downtime_hours * revenue_loss_per_hour_crores
    potential_downtime_savings_crores = estimated_total_downtime_cost_crores * DOWNTIME_REDUCTION_PERCENTAGE

    # 3. Total Potential Annual Savings (Crores)
    total_potential_annual_savings = potential_maintenance_savings + potential_downtime_savings_crores

    # --- Output ---
    results = {
        "annual_maintenance_budget_crores": annual_maintenance_budget_crores,
        "unplanned_downtime_hours": unplanned_downtime_hours,
        "revenue_loss_per_hour_lakhs": revenue_loss_per_hour_lakhs,
        "potential_maintenance_savings_crores": potential_maintenance_savings,
        "potential_downtime_savings_crores": potential_downtime_savings_crores,
        "total_potential_annual_savings_crores": total_potential_annual_savings,
        "maintenance_reduction_percentage": int(MAINTENANCE_REDUCTION_PERCENTAGE * 100),
        "downtime_reduction_percentage": int(DOWNTIME_REDUCTION_PERCENTAGE * 100),
        "estimated_total_downtime_cost_crores": estimated_total_downtime_cost_crores,
    }
    return results

INDUSTRY_CONTEXT = {
    "Manufacturing": {
        "savings_hook": "Machining and assembly lines that analyze vibration, temperature, and acoustic signatures early see dramatic scrap and warranty reductions.",
        "hero_stat": "Top Tier 1 auto supplier cut downtime response from 45 minutes to 6 minutes with edge anomaly detection.",
    },
    "Energy": {
        "savings_hook": "Utilities avoid cascading failures by fusing transformer, weather, and SCADA feeds at the edge.",
        "hero_stat": "Combined-cycle plant prevented two turbine trips, protecting ₹34 Cr in output within the first quarter.",
    },
    "Logistics": {
        "savings_hook": "Fleet-wide telemetry fused in real-time avoids cold-chain spoilage and loading bay gridlock.",
        "hero_stat": "National logistics operator improved asset utilization by 18% after deploying Sensyva nodes to yards.",
    },
    "Defense": {
        "savings_hook": "Multi-sensor fusion enables mission-critical systems to go from reactive maintenance to pre-emptive readiness.",
        "hero_stat": "A radar OEM reduced mission aborts by 72% by pairing Sensyva’s edge stack with existing BMS sensors.",
    },
    "Other": {
        "savings_hook": "Sensor-rich environments—from pharmaceuticals to mining—gain clarity when silent data streams become decisions.",
        "hero_stat": "Sensyva deployments routinely surface ROI within 90 days by turning dormant data into actionable foresight.",
    },
}


def get_industry_context(industry: str) -> dict:
    """Return narrative context for the selected industry."""
    return INDUSTRY_CONTEXT.get(industry, INDUSTRY_CONTEXT["Other"])


# --- Presentation Utility Functions ---
def format_crores(value):
    """Formats a number into a readable Crores INR string."""
    return f"₹{value:.2f} Cr"

def format_lakhs(value):
    """Formats a number into a readable Lakhs INR string."""
    return f"₹{value:.2f} Lakhs"

# --- Main Streamlit App Layout ---

# Custom CSS aligned with Sensyva brand palette
st.markdown("""
<style>
:root {
    --bg-start: #10243b;
    --bg-mid: #163652;
    --bg-end: #214c70;
    --panel-bg: rgba(37, 63, 89, 0.88);
    --panel-border: rgba(126, 193, 237, 0.35);
    --primary: #137ab7;
    --primary-bright: #3cc6ff;
    --accent: #7fe0ff;
    --text-strong: #f1f7ff;
    --text-body: #e2ecf8;
    --text-muted: #b0c5dc;
}

/* Base styles */
.stApp {
    background: linear-gradient(145deg, var(--bg-start) 0%, var(--bg-mid) 42%, var(--bg-end) 100%) !important;
    color: var(--text-body) !important;
    font-family: 'Inter', system-ui, -apple-system, sans-serif !important;
}

.main .block-container {
    background: transparent !important;
}

/* Headings and emphasis */
h1, h2, h3, .st-b5 {
    color: var(--primary-bright) !important;
    font-weight: 600 !important;
    letter-spacing: 0.5px !important;
}

.stMarkdown strong {
    color: var(--text-strong) !important;
}

/* Body copy */
.stMarkdown p,
.stMarkdown li,
.result-box p,
.result-box li,
.css-1d391kg, .css-1p05t8e, .css-1n76uvr {
    color: var(--text-body) !important;
    line-height: 1.65 !important;
}

.css-81oif8, .css-1aehpvj, .stCaption, .stMarkdown em {
    color: var(--text-muted) !important;
}

/* Panels and forms */
.stForm, div[data-testid="stForm"], form {
    border: 1px solid var(--panel-border) !important;
    padding: 30px !important;
    border-radius: 18px !important;
    background: var(--panel-bg) !important;
    box-shadow: 0 20px 48px rgba(5, 18, 33, 0.36) !important;
}

.stNumberInput, .stSelectbox, .stTextInput {
    background-color: rgba(255, 255, 255, 0.95) !important;
    color: #0b2742 !important;
    border: 1px solid rgba(21, 92, 140, 0.35) !important;
    border-radius: 12px !important;
    padding: 12px 14px !important;
    margin: 10px 0 !important;
}

.stNumberInput:hover, .stSelectbox:hover, .stTextInput:hover {
    border-color: var(--primary) !important;
    background-color: rgba(255, 255, 255, 1) !important;
}

.stTextInput > label {
    color: var(--text-muted) !important;
    letter-spacing: 0.4px !important;
}

.stTextInput > div > div > input,
.stNumberInput input {
    color: #0b2742 !important;
    caret-color: var(--primary) !important;
}

.stTextInput > div > div > input::placeholder,
.stNumberInput input::placeholder {
    color: rgba(11, 39, 66, 0.6) !important;
}

.stTextInput > div > div > input:focus,
.stNumberInput input:focus {
    border: 1px solid var(--accent) !important;
    box-shadow: 0 0 0 2px rgba(127, 224, 255, 0.35) !important;
}

.stSelectbox > div > div {
    background-color: rgba(255, 255, 255, 0.95) !important;
    color: #0b2742 !important;
    border: 1px solid rgba(21, 92, 140, 0.35) !important;
}

.stSelectbox div[role="listbox"] {
    background-color: rgba(240, 247, 255, 0.98) !important;
    border: 1px solid rgba(21, 92, 140, 0.35) !important;
}

.stSelectbox div[role="option"] {
    color: #0b2742 !important;
}

.stSelectbox div[role="option"]:hover {
    background: rgba(19, 122, 183, 0.16) !important;
}

/* Buttons */
.stButton > button, button[kind="primary"], div[data-testid="stFormSubmitButton"] > button {
    background: linear-gradient(130deg, var(--primary) 0%, var(--primary-bright) 60%, var(--accent) 100%) !important;
    color: var(--text-strong) !important;
    font-weight: 600 !important;
    border-radius: 14px !important;
    border: 1px solid rgba(180, 233, 255, 0.55) !important;
    padding: 18px 34px !important;
    transition: all 0.3s ease !important;
    letter-spacing: 1px !important;
    box-shadow: 0 16px 42px rgba(18, 122, 180, 0.35) !important;
}

.stButton > button:hover, button[kind="primary"]:hover {
    background: linear-gradient(130deg, var(--primary-bright) 0%, var(--accent) 70%, #b8f0ff 100%) !important;
    transform: translateY(-2px) scale(1.02) !important;
    box-shadow: 0 22px 48px rgba(33, 173, 229, 0.45) !important;
}

/* Metrics */
.stMetric {
    color: var(--text-strong) !important;
    background: linear-gradient(140deg, rgba(255, 255, 255, 0.15), rgba(184, 236, 255, 0.25)) !important;
    border-radius: 16px !important;
    padding: 20px !important;
    box-shadow: inset 0 0 0 1px rgba(191, 239, 255, 0.55), 0 18px 40px rgba(8, 30, 49, 0.32) !important;
}

/* Info & alert boxes */
.stAlert, .stWarning, .stInfo {
    background-color: rgba(255, 255, 255, 0.08) !important;
    color: var(--text-body) !important;
    border: 1px solid rgba(180, 233, 255, 0.35) !important;
    border-radius: 14px !important;
}

.stAlert p, .stWarning p, .stInfo p {
    color: var(--text-body) !important;
}

/* Results box */
.result-box {
    padding: 30px !important;
    margin-top: 26px !important;
    border-radius: 20px !important;
    background: linear-gradient(140deg, rgba(73, 121, 163, 0.55) 0%, rgba(128, 187, 224, 0.55) 100%) !important;
    border-left: 6px solid var(--accent) !important;
    box-shadow: 0 24px 60px rgba(12, 34, 54, 0.38) !important;
}

.result-box h4 {
    color: var(--text-strong) !important;
}

.result-box ul li strong {
    color: var(--accent) !important;
}

/* Divider */
hr {
    border-color: rgba(180, 233, 255, 0.35) !important;
    margin: 1.8rem 0 !important;
}

/* Misc elements */
.streamlit-expanderHeader, .css-j7qwjs {
    color: var(--text-strong) !important;
}
</style>
""", unsafe_allow_html=True)


logo_path = Path("assets/sensyva_logo.png")
header_col1, header_col2 = st.columns([1, 3])
with header_col1:
    if logo_path.exists():
        st.image(str(logo_path), width=220)
    else:
        st.markdown(
            "<div style='padding-top: 12px; color: var(--text-muted);'>"
            "Add your Sensyva logo at <code>assets/sensyva_logo.png</code> to display it here."
            "</div>",
            unsafe_allow_html=True,
        )
with header_col2:
    st.title("Sensyva AI: The Industrial Data Gap Audit")
    st.markdown(
        "<p style='font-size: 1.15em; color: var(--text-body); margin-bottom: 0;'>"
        "Industrial Intelligence Layer • Converting dormant sensor streams into decisive revenue protection."
        "</p>",
        unsafe_allow_html=True,
    )

st.info("""
Welcome to the Sensyva AI Data Gap Audit tool! Please fill out the form below with your operational metrics and click 'Generate AI Potential Report' to see your results.
""")
st.markdown("""
<p style="font-size: 1.1em; color: var(--text-muted);">
    Quantify your *hidden* annual losses from unanalyzed sensor data and see the projected financial upside of Sensyva’s 10 ms Edge AI.
</p>
""", unsafe_allow_html=True)

# --- Input Form ---
st.subheader("1. Your Operational Metrics")

with st.form(key='audit_form', clear_on_submit=False):
    col1, col2 = st.columns(2)

    with col1:
        st.markdown("**Core Financial Investment**")
        st.caption("This is your total annual budget for all maintenance and repair activities. It helps estimate direct cost savings from predictive maintenance.")
        annual_maintenance_budget_crores = st.number_input(
            "Annual Maintenance & Repair Budget (in Crores INR)",
            min_value=0.0,
            value=50.0,
            step=5.0,
            format="%.2f",
            key="budget"
        )

    with col2:
        st.markdown("**Cost of Downtime**")
        st.caption("Total hours of unexpected production stoppages per year. Used to estimate losses from unplanned downtime.")
        unplanned_downtime_hours = st.number_input(
            "Annual Unplanned Downtime/Production Interruption (in Hours)",
            min_value=0.0,
            value=800.0,
            step=50.0,
            format="%.0f",
            key="downtime_hours"
        )
        st.caption("Average financial loss for every hour of downtime, in Lakhs INR. Helps calculate the impact of interruptions.")
        revenue_loss_per_hour_lakhs = st.number_input(
            "Average Revenue/Production Loss per Downtime Hour (in Lakhs INR)",
            min_value=0.0,
            value=2.0,
            step=0.5,
            format="%.2f",
            key="loss_per_hour"
        )
    
    # Industry Selector
    st.markdown("**Industry Sector**")
    st.selectbox("Select your primary industry", 
                 options=["Manufacturing", "Energy", "Logistics", "Defense", "Other"],
                 index=0, 
                 key="industry")
    
    st.markdown("---")
    
    st.markdown("""
        <style>
        div[data-testid="stFormSubmitButton"] > button {
            background: linear-gradient(45deg, #1565c0, #1e88e5) !important;
            color: white !important;
        }
        </style>
    """, unsafe_allow_html=True)
    
    col1, col2, col3 = st.columns([1, 2, 1])
    with col2:
        submitted = st.form_submit_button(
            "✨ Generate AI Potential Report ✨",
            use_container_width=True,
            type="primary"
        )

# --- Results Presentation ---

if submitted:
    invalid_inputs = any([
        annual_maintenance_budget_crores <= 0,
        unplanned_downtime_hours <= 0,
        revenue_loss_per_hour_lakhs <= 0,
    ])

    if invalid_inputs:
        st.warning("Please enter values greater than zero for budget, downtime hours, and hourly loss so we can build a credible forecast.")
    else:
        progress_steps = [
            ("Reconciling your maintenance and downtime baselines…", 0.35),
            ("Applying Sensyva’s proven reduction benchmarks…", 0.45),
            ("Quantifying upside and packaging insights…", 0.4),
        ]
        status_placeholder = st.empty()
        progress_bar = st.progress(0)
        for idx, (message, pause) in enumerate(progress_steps, start=1):
            status_placeholder.write(f"🔄 {message}")
            progress_bar.progress(int(idx / len(progress_steps) * 100))
            time.sleep(pause)
        progress_bar.empty()
        status_placeholder.empty()

        try:
            results = calculate_sensyva_impact_generalized(
                annual_maintenance_budget_crores,
                unplanned_downtime_hours,
                revenue_loss_per_hour_lakhs
            )
            industry_choice = st.session_state.get("industry", "Other")
            industry_context = get_industry_context(industry_choice)

            st.success("✅ Analysis Complete: Your Sensyva AI Potential Report is Ready.")
            
            st.subheader(f"2. Quantified Impact Forecast for {industry_choice} Leaders")
            st.markdown(f"""
            <p style='color: #e3f2fd;'>
            Based on Sensyva’s edge deployments in {industry_choice.lower()} environments, here’s the risk you can pull back into revenue.
            </p>
            """, unsafe_allow_html=True)
            
            # Display Key Metrics
            col_m1, col_m2, col_m3 = st.columns(3)
            
            # Metric 1: Total Annual Savings
            col_m1.metric(
                label="Potential Total Annual Savings",
                value=format_crores(results['total_potential_annual_savings_crores']),
                help="Sum of projected savings from maintenance reduction and proactive downtime prevention."
            )
            
            # Metric 2: Maintenance Savings
            col_m2.metric(
                label=f"Maintenance Cost Reduction (up to {results['maintenance_reduction_percentage']}%)",
                value=format_crores(results['potential_maintenance_savings_crores']),
                help="Savings realized by moving from scheduled/reactive to condition-based, predictive maintenance."
            )

            # Metric 3: Downtime Savings
            col_m3.metric(
                label=f"Downtime Risk Reduction (up to {results['downtime_reduction_percentage']}%)",
                value=format_crores(results['potential_downtime_savings_crores']),
                help="Savings from preventing production stoppages by detecting anomalies in 10ms at the Edge."
            )

            st.markdown("**Downtime Loss Compression**")
            downtime_chart_df = pd.DataFrame(
                {
                    "Scenario": ["Current Downtime Loss", "Projected Loss with Sensyva"],
                    "Cost (Crores)": [
                        results["estimated_total_downtime_cost_crores"],
                        results["estimated_total_downtime_cost_crores"] - results["potential_downtime_savings_crores"],
                    ],
                }
            ).set_index("Scenario")
            st.bar_chart(downtime_chart_df, height=320)

            st.markdown("---")

            # --- Report Narrative ---
            st.subheader("3. Why This Gap Exists: The Sensyva Difference")
            st.markdown(f"""
            <div class="result-box">
                <h4 style="color: #48bb78; margin-bottom: 10px;">The 95% Data Gap: A Hidden Cost in {industry_choice}</h4>
                <p style="font-size: 1em;">
                Your current losses of <strong>{format_crores(results['total_potential_annual_savings_crores'])}</strong> are tied to the 
                <strong>95% of industrial sensor data</strong> that never gets analyzed in time. This blind spot drives:</p>
                <ul>
                    <li><strong style='color: #ccc;'>Late Detection:</strong> Waiting for data to reach the cloud means failures are detected too late, resulting in {results['unplanned_downtime_hours']:.0f} hours/year of hard downtime.</li>
                    <li><strong style='color: #ccc;'>Incomplete Picture:</strong> Traditional monitoring and {format_crores(results['annual_maintenance_budget_crores'])} in spend still miss cross-sensor context.</li>
                    <li><strong style='color: #ccc;'>Industry Reality:</strong> {industry_context['savings_hook']}</li>
                </ul>
                <br>
                <h4 style="color: #48bb78; margin-bottom: 10px;">Sensyva AI: The Path to Real-Time Intelligence</h4>
                <p style="font-size: 1em;">Sensyva’s hardware-agnostic Edge AI framework fuses and scores sensor streams <em>in 10ms</em>, so your teams act before faults cascade.</p>
                <ul>
                    <li><strong style='color: #ccc;'>10 Millisecond Decisions:</strong> We analyze vibration, thermal, acoustic, and power data together to surface actionable alerts.</li>
                    <li><strong style='color: #ccc;'>Proven Reliability:</strong> Clients routinely see maintenance savings of up to {results['maintenance_reduction_percentage']}% and near-zero unplanned downtime.</li>
                </ul>
                <p style="font-size: 0.95em; margin-top: 16px; color: #bbdefb;">
                    📊 {industry_context['hero_stat']}
                </p>
            </div>
            """, unsafe_allow_html=True)
            
            st.markdown("---")

            # Opportunity summary download
            summary_content = "\n".join([
                "Sensyva AI | 95% Data Gap Audit Snapshot",
                f"Industry: {industry_choice}",
                f"Annual Maintenance Budget: {format_crores(results['annual_maintenance_budget_crores'])}",
                f"Unplanned Downtime (hrs/year): {results['unplanned_downtime_hours']:.0f}",
                f"Downtime Cost (per hour): ₹{results['revenue_loss_per_hour_lakhs']:.2f} Lakhs",
                f"Current Downtime Loss: {format_crores(results['estimated_total_downtime_cost_crores'])}",
                f"Maintenance Savings Potential: {format_crores(results['potential_maintenance_savings_crores'])}",
                f"Downtime Savings Potential: {format_crores(results['potential_downtime_savings_crores'])}",
                f"Total Potential Annual Savings: {format_crores(results['total_potential_annual_savings_crores'])}",
                "",
                "Next Step: Share your operations context so we can model the first 90 days with Sensyva Edge AI.",
            ])
            st.download_button(
                label="📄 Download a One-Page Summary",
                data=summary_content,
                file_name="sensyva-data-gap-audit-summary.txt",
                mime="text/plain",
            )

            # --- Lead Capture CTA ---
            st.markdown("""
                <style>
                /* Lead capture form styles */
                [data-testid="stForm"] {
                    background-color: rgba(25, 32, 72, 0.95) !important;
                    border: 2px solid #1e88e5 !important;
                    padding: 2rem !important;
                    border-radius: 12px !important;
                }
                
                /* Text input styling */
                .stTextInput input {
                    background-color: rgba(255, 255, 255, 0.1) !important;
                    color: white !important;
                    border: 1px solid #1e88e5 !important;
                    padding: 8px 12px !important;
                }
                
                .stTextInput input:focus {
                    border: 2px solid #64b5f6 !important;
                    box-shadow: 0 0 0 1px #64b5f6 !important;
                }
                
                /* Warning message styling */
                .stWarning {
                    background-color: rgba(25, 32, 72, 0.95) !important;
                    color: #ffd700 !important;
                    border: 1px solid #ffd700 !important;
                }
                </style>
            """, unsafe_allow_html=True)
            
            st.subheader("4. Take the Next Step")
            st.warning("Share your details to receive the full PDF report, industry benchmarks, and a 15-minute roadmap session.")
            
            with st.form(key='lead_form'):
                lead_col1, lead_col2 = st.columns(2)
                with lead_col1:
                    name = st.text_input("Your Full Name", key="lead_name")
                with lead_col2:
                    email = st.text_input("Work Email Address", key="lead_email")
                
                company = st.text_input("Company Name & Title", key="lead_company")
                phone = st.text_input("Phone / WhatsApp (optional)", key="lead_phone")
                region = st.text_input("Preferred Time Zone or Region", key="lead_region")
                
                st.caption("We’ll use this to align the next conversation with your operations team.")

                lead_button_label = f"🚀 Unlock {format_crores(results['total_potential_annual_savings_crores'])} & Schedule a 15-Min Call"
                lead_submitted = st.form_submit_button(
                    lead_button_label,
                    use_container_width=True,
                    type="primary"
                )
                
                if lead_submitted:
                    if name and email and company:
                        st.success(
                            f"Thank you, {name}! We’ll follow up at {email} to close the remaining {format_crores(results['total_potential_annual_savings_crores'])} gap. "
                            "A calendar link will arrive shortly so you can choose your 15-minute window."
                        )
                        # In a production deployment, trigger lead-capture and email automation here.
                    else:
                        st.error("Please fill out your name, work email, and company so we can prepare the custom briefing.")

        except Exception as e:
            st.error(f"An error occurred during calculation. Please check your inputs. Error: {e}")

# --- Footer ---
st.markdown("""
<div style="text-align: center; margin-top: 50px; padding: 20px; border-top: 1px solid #3c4078;">
    <p style="font-size: 0.8em; color: #888;">
        Sensyva AI | Building the Nervous System for the Physical World
    </p>
</div>
""", unsafe_allow_html=True)
