---
#icon: material/folder-open-outline
icon: material/medal
---

🚨 **<span style="color: red;">Important Lab Dependency</span>**

This mission requires configuration created in the following missions:

1. **[AI Agent Track ⮕ Scripted Agent: Mission 1 - Configure Scripted Agent to answer basic questions](../AI_Lab_Scripted_Mission1/)**<br>
2. **[AI Agent Track ⮕ Autonomous AI Agent: Mission 1 - Create AI Autonomous Agent](../AI_Lab_Aut_Mission1/)**<br>
3. **[AI Agent Track ⮕ Autonomous AI Agent: Mission 2 - Integrating the AI Agent with Flow for Voice Calls](../AI_Lab_Aut_Mission2/)**<br>

If these missions were not completed, some steps in current mission will not function correctly.

---

## Mission Details

 - Your mission is to integrate the **Scripted AI Agent** with the Voice flow so it can answer questions about store hours. In the next steps, you will extend your **Webex Contact Center** flow to use the **Scripted AI Agent** together with the **Autonomous AI Agent**.

## Build

### Task 1. Add the newly created Scripted Agent to the Voice flow.


1. In [Webex Control Hub](https://admin.webex.com){:target="_blank"}, go to **Contact Center**, click on **Flows**, and search for the flow with name **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_2000_AutoAI_Lab">Your_Attendee_ID</span>_2000_AutoAI_Lab<span class="copy" title="Click to copy!"></span></span>** (that you created during the Autonomous AI lab).
   ![Profiles](../graphics/Lab1_AI_Agent/6.27.gif)

2. Click on **Edit** and rename the flow to **<span class="attendee-id-container">Autonomous_Scripted_Flow_2000_<span class="attendee-id-placeholder" data-prefix="Autonomous_Scripted_Flow_2000_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>**. Publish the flow.
   ![Profiles](../graphics/Lab1_AI_Agent/6.28.gif)

3. Add a **Menu** node in front of the **VirtualAgentV2** node.
   ![Profiles](../graphics/Lab1_AI_Agent/6.29.gif)

4. Click on the **Menu** node and Enable Text-to-Speech. Select native **Cisco Cloud Text-to-Speech** connector, add Text-to-Speech message, remove the Audio File option. Finally, enter the text: ***Press 1 to create a new order. Press 2 to track an order or check the store hours.***<span class="copy-static" data-copy-text="Press 1 to create a new order. Press 2 to track an order or check the store hours."><span class="copy" title="Click to copy!"></span></span><br>
   ![Profiles](../graphics/Lab1_AI_Agent/6.30.gif)

5. Adjust the **Menu** node to have options 1 and 2.
   ![Profiles](../graphics/Lab1_AI_Agent/6.31.gif)

6. Bring one more **VirtualAgentV2** node. Click on it. In the Contact Center AI Config search for scripted and select **Webex AI Agent (Scripted)**. Under the Virtual Agent option, search for the Scripted AI Agent with name **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Scripted_AI_Agent">Your_Attendee_ID</span>_Scripted_AI_Agent<span class="copy" title="Click to copy!"></span></span>**<br>
   ![Profiles](../graphics/Lab1_AI_Agent/6.32.gif)

7. Configure the following connections of the **Menu** node:

    > Connect Option 1 of the **Menu** to the **VirtualAgentV2** that is configured with Autonomous AI agent
    >
    > Connect Option 2 to the **VirtualAgentV2** node that is configured with your Scripted AI Agent.
    >
    > Connect **No-Input Timeout** to the front of the **Menu** node
    >
    > Connect **Unmatched Entry** to the front of the **Menu** node

   ![Profiles](../graphics/Lab1_AI_Agent/6.33.gif)

8. Connect **Escalated** output from the **VirtualAgentV2** node to the **Queue** node. Connect **Handled** output to the **Disconnect Contact** node.
   ![Profiles](../graphics/Lab1_AI_Agent/6.34.gif)

9. **Validate** and **Publish** the Flow.
   ![Profiles](../graphics/Lab1_AI_Agent/6.35.gif)

10. Switch to Control Hub and navigate to **Channels** under Customer Experience section
    
    > - Locate your Inbound Channel (you can use the search):  **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Channel">Your_Attendee_ID</span>_Channel<span class="copy" title="Click to copy!"></span></span>**
    > 
    > - Select the Routing Flow: **<span class="attendee-id-container">Autonomous_Scripted_Flow_2000_<span class="attendee-id-placeholder" data-prefix="Autonomous_Scripted_Flow_2000_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>**
    > 
    > - Select the Version Label: **Latest**
    > 
    > - Click **Save** in the lower right corner of the screen

    ![Profiles](../graphics/Lab1_AI_Agent/2.53.gif)<br>


11. Dial the support number assigned to your **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Channel">Your_Attendee_ID</span>_Channel<span class="copy" title="Click to copy!"></span></span>** to test the Autonomous AI Agent over a voice call.
    ![Profiles](../graphics/Lab1_AI_Agent/2.84.png)

12. During IVR, press 2 and ask **What are the store hours?**

<p style="text-align:center"><strong>Congratulations, you have officially completed this mission! 🎉🎉 </strong></p>
