---
#icon: material/folder-open-outline
icon: material/medal
---

## Mission Details

Your mission is to integrate the Scripted AI agent with the Voice flow to enable it to answer questions about store hours.

## Build

### Task 1. Add the newly created Scripted Agent to the Voice flow.

1. In [Control Hub](https://admin.webex.com){:target="_blank"}, go to **Contact Center**, click on **Flows**, and search for the flow with name \*\*<copy>AutonomousAI_Flow_2000_<w class="attendee"></w></copy>\*\* (that you created during the Autonomous AI lab).
   ![Profiles](../graphics/Lab1_AI_Agent/6.27.gif)

2. Click on **Edit** and rename the flow to **<copy>Autonomous*Scripted_Flow_2000*<w class="attendee"></w></copy>**. Publish the flow.
   ![Profiles](../graphics/Lab1_AI_Agent/6.28.gif)

3. Add a **Menu** node in front of the VirtualAgentV2 node.
   ![Profiles](../graphics/Lab1_AI_Agent/6.29.gif)

4. Click on the **Menu** node and Enable Text-to-Speech. Select native **Cisco Cloud Text-to-Speech** connector, add Text-to-Speech message, remove the Audio File option. Finally, enter the text: **_<copy>Press 1 to create a new order. Press 2 to track an order or check the store hours.</copy>_**
   ![Profiles](../graphics/Lab1_AI_Agent/6.30.gif)

5. Adjust the **Menu** node to have options 1 and 2.
   ![Profiles](../graphics/Lab1_AI_Agent/6.31.gif)

6. Bring one more VirtualAgentV2 node. Click on it. In the Contact Center AI Config search for scripted and select **Webex AI Agent (Scripted)**. Under the Virtual Agent option, search for the Scripted AI Agent with name **<copy><w class="attendee"></w>\_Scripted_AI_Agent</copy>**.
   ![Profiles](../graphics/Lab1_AI_Agent/6.32.gif)

7. Connect Option 1 of the **Menu** to the **VirtualAgentV2** node that is configured with Autonomous AI agent. And connect Option 2 to the **VirtualAgentV2** node that is configured with your Scripted AI Agent.
   ![Profiles](../graphics/Lab1_AI_Agent/6.33.gif)

8. Connect **Escalated** output from the **VirtualAgentV2** node to the **Queue** node. Connect **Handled** output to the **Disconnect Contact** node.
   ![Profiles](../graphics/Lab1_AI_Agent/6.34.gif)

9. **Validate** and Publish the Flow.
   ![Profiles](../graphics/Lab1_AI_Agent/6.35.gif)

10. From Control Hub, make sure that the Channel **<copy><w class="attendee"></w>\_2000_Channel</copy>**.
    ![Profiles](../graphics/Lab1_AI_Agent/6.36.gif)

11. Dial the number that is associated with **<span class="attendee-id-placeholder">Your_Attendee_ID</span>\_2000_Channel** Channel.
    ![Profiles](../graphics/Lab1_AI_Agent/6.37.png)

12. During IVR, press 2 and ask **What are the store hours?**

<p style="text-align:center"><strong>Congratulations, you have officially completed this mission! 🎉🎉 </strong></p>
