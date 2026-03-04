---
#icon: material/folder-open-outline
icon: material/medal
---

# (Optional) Mission 7: Configure Action with MCP

**<details><summary>What is MCP? <span style="color: orange;"></span></summary>**

MCP, or Model Context Protocol, is a standardized framework designed to facilitate the exchange of contextual information between AI models and external systems, enabling more dynamic and context-aware interactions. By using MCP, AI agents can be easily integrated with other external tools, allowing for different types of fulfillment.

## </details>

## Mission overview

MCP Action is still in development and is currently available only for customer demos. In this mission, you will not be creating an MCP server or adding it to the tenant, as this functionality is not yet available to customers. The MCP server has already been created and added to the tenant for this lab. Your task is to create an action using this MCP server and test how it works.

For this mission, the MCP server was created to search external database for Flower Store locations. Your mission is to create a new action with this MCP server and test the results.<br>
![Profiles](../graphics/Lab1_AI_Agent/MCPAction.png)

---

## Build

### Task 1. Create MCP Action

1. Open up your AI Agent **<copy><w class="attendee"></w>\_2000_AutoAI_Lab</copy>** and start creating the new **Action**.
   ![Profiles](../graphics/Lab1_AI_Agent/15.1.gif)

2. From the list, select **get_store_locations** MCP option.
   ![Profiles](../graphics/Lab1_AI_Agent/15.2.png)

3. You can see that another Action was created, and some of the configurations, such as Description and Entity, were transferred from the MCP server. This new Action essentially adds functionality to the AI Agent, enabling it to provide customers with store locations. These location details are stored in a third-party database and are accessed through the MCP integration.
   ![Profiles](../graphics/Lab1_AI_Agent/15.3.png)

4. **Publish** the changes.
   ![Profiles](../graphics/Lab1_AI_Agent/15.4.png)

### Task 2. Test MCP Action

1. You can test the functionality using the chat **Preview** option. Ask the AI agent **<copy>What are the store locations?</copy>**. The information that the AI agent will respond with will be retrieved from the external database over the MCP.
   ![Profiles](../graphics/Lab1_AI_Agent/15.5.png)

2. Open up the interaction transcripts in the **Session** tab to confirm that result came from the MCP tool.
   ![Profiles](../graphics/Lab1_AI_Agent/15.6.gif)

<p style="text-align:center"><strong>Congratulations, you have officially completed this mission! 🎉🎉 </strong></p>
