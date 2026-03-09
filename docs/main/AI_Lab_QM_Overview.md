### Quality Management Feature Overview

The **Evaluations** feature lets supervisors create customized evaluation forms to assess agent
interactions automatically. Using AI, agent interactions are analyzed and evaluation scores
are generated against the pre-defined criteria set by the supervisors. Supervisors have the
ability to manually adjust scores if necessary. When scores are adjusted, this information is
subsequently used to improve the AI models. Evaluation scores are available both at the
individual interaction level and as aggregated data for each agent, offering clear insights
into performance trends. This streamlines quality assurance, providing consistent and
objective feedback and helps maintain high service standards.

## Story

The supervisor requires agents to always ask for the customer’s name and the occasion for the flowers. Based on these criteria, the agents will be evaluated and additional training will be provided.

## Call Flow Overview

1. The supervisor logs in to the Supervisor Dashboard, which is configured with the Evaluation Form.
2. A new call enters the voice flow; the caller asks the AI agent to be connected to a human agent.
3. The agent talks to the customer about the flower order.
4. After the call is completed, the supervisor checks if the agent completed the questions based on the Evaluation Form.
