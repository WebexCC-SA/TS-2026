---
#icon: material/folder-open-outline
icon: material/medal
---

# Mission 5: Configure Transfer Action for a Specific Queue

**<details><summary>Good to Know: <span style="color: blue;">What is a Transfer Action?</span></summary>**

Transfer Action is a task that an AI agent performs by understanding user intents and transferring the interaction back to the WxCC flow with custom data for further processing.

## </details>

## Mission overview

Your mission is to:

 - Configure the Transfer action to transfer the call to WxCC Voice with custom settings for further processing if the caller wants to talk to the HR or Billing departments.

    ![Profiles](../graphics/Lab1_AI_Agent/TransferToFlow.png)

---

## Build

### Task 1. Create Transfer to flow action in AI Agent Studio portal

1. Switch to Control Hub, go to **Contact Center** > **Overview** and open up the **Webex AI Agent** Studio portal.
    ![Profiles](../graphics/Lab1_AI_Agent/11.1.png)<br>

2. Open your AI agent with name **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_2000_AutoAI_Lab">Your_Attendee_ID</span>_2000_AutoAI_Lab<span class="copy" title="Click to copy!"></span></span>** and then click on **Actions**.
    ![Profiles](../graphics/Lab1_AI_Agent/11.2.gif)<br>

3. Select **New action** option. Then click on **Create new** and choose **Transfer** action.
   ![Profiles](../graphics/Lab1_AI_Agent/11.3.png)<br>

4. Name the action as **<copy>Transfer_to_different_department</copy>**.<br/> In the **Transfer condition** field, paste **<copy>When the customer wants to transfer the call to HR or Billing department use this Action</copy>**.

4. Configure new action as follows:

    > - Action name: **Transfer_to_different_department**<span class="copy-static" data-copy-text="Transfer_to_different_department"><span class="copy" title="Click to copy!"></span></span><br>
    > - Transfer condition: **When the customer wants to transfer the call to HR or Billing department use this Action.**<span class="copy-static" data-copy-text="When the customer wants to transfer the call to HR or Billing department use this Action."><span class="copy" title="Click to copy!"></span></span><br>

    ![Profiles](../graphics/Lab1_AI_Agent/11.4.png)<br>

5. Click on add **New input entity**. Configure it with the following: <br>
    > Entity name: **department**<span class="copy-static" data-copy-text="department"><span class="copy" title="Click to copy!"></span></span><br>
    > Entity description: **Collect if the customer wants to transfer the call to HR or Billing Department**<span class="copy-static" data-copy-text="Collect if the customer wants to transfer the call to HR or Billing Department"><span class="copy" title="Click to copy!"></span></span><br>
    > Entity example: **HR**<span class="copy-static" data-copy-text="HR"><span class="copy" title="Click to copy!"></span></span><br>
    > Entity example: **Billing**<span class="copy-static" data-copy-text="Billing"><span class="copy" title="Click to copy!"></span></span><br>
    ![Profiles](../graphics/Lab1_AI_Agent/11.5.png)<br>

6. Finally, click on **Add** to add the new action.
    ![Profiles](../graphics/Lab1_AI_Agent/11.6.png)<br>

7. **Publish** the AI Agent.
    ![Profiles](../graphics/Lab1_AI_Agent/11.14.png)<br>

### Task 2. Configure voice flow to transfer customers to the HR or Billing queue

1. Switch to [Webex Control Hub](https://admin.webex.com){:target="_blank"}, open your voice flow with the name **<span class="attendee-id-container">AutonomousAIFlow_2000_<span class="attendee-id-placeholder" data-prefix="AutonomousAIFlow_2000_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>**<br>.
    ![Profiles](../graphics/Lab1_AI_Agent/11.7.gif)<br>

2. Click on **Edit** to edit the flow.<br>
    ![Profiles](../graphics/Lab1_AI_Agent/11.8.gif)<br>

3. <span style="color: red;">[Read Only]</span>. In the previous task, we created an action with the **department** entity. The information about the value of the entity can be retrieved from the Activity Output Variable, specifically from **VirtualAgentV2XXXMetaData**.
   In the next steps, we will add the **Set Variable** node to see the MetaData in JSON format, and then we will add the **Parse** and **Case** nodes to handle the logic and distribute the call to the appropriate queue.
    ![Profiles](../graphics/Lab1_AI_Agent/11.11.png)<br>

4. Create new flow variable 
    
    > **Name**: **MetaData_AI**<span class="copy-static" data-copy-text="MetaData_AI"><span class="copy" title="Click to copy!"></span></span><br>
    > **Variable type**: **string** <br>
    > Click **Save**<br>

    ![Profiles](../graphics/Lab1_AI_Agent/11.9.gif)<br>

5. Add a **Set Variable** node from the activity library on the left with following configuration:
  
    > - Remove connection from **Escalated** output of the **VirtualAgentV2** node to the **QueueCOntact** node
    >
    > - Connect **Escalated** output of the **VirtualAgentV2** node to the **Set Variable** node
    >
    > - Connect **Set Variable** to **WelcomePrompt**.

    ![Profiles](../graphics/Lab1_AI_Agent/11.10.gif)<br>

6. Click on **Set Variable** node, 

    > - Navigate to the **Variable Settings** section.
    >
    > - Click on the **Variable** drop-down list and select **MetaData_AI**.
    >
    > - For **Set Value** first click on **VirtualAgentV2** node and copy the name of the MetaData Activity Output Variable. Then paste this value inside of the **{{ }}** to the Variable Value field. See the GIF below for details.
    >
    ![Profiles](../graphics/Lab1_AI_Agent/11.12.gif)<br>

7. Connect **Set Variable** node to the **Queue** node for now. **Validate** and **Publish** the Flow.
    ![Profiles](../graphics/Lab1_AI_Agent/11.13.gif)<br>

8. Place test call to the number that is related to your channel **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Channel">Your_Attendee_ID</span>_Channel<span class="copy" title="Click to copy!"></span></span>**. During the conversation with AI Agent **ask to transfer you to the HR department**. The call should go to the only Queue that is currently configured in the flow.

9. After the call is completed, switch to Flow Designer and click on **Debug**. Review the metadata in the **Set Variable** node.
    ![Profiles](../graphics/Lab1_AI_Agent/11.14.gif)<br>

10. <span style="color: red;">[Read Only]</span> From MetaData we can see the value of the department entity is "HR".
    ![Profiles](../graphics/Lab1_AI_Agent/11.15.png)<br>

11. <span style="color: red;">[Read Only]</span>. To parse the value in the flow, we need to determine the JSON path to retrieve the value. By using an open-source tool (e.g. [JSONPath Online Evaluator](https://jsonpath.com/){:target="\_blank"}), you can ensure you are using the correct JSON path to extract the value you need. In our case, the JSON path is **$.actions.Transfer_to_different_department[0].input.department**<span class="copy-static" data-copy-text="$.actions.Transfer_to_different_department[0].input.department"><span class="copy" title="Click to copy!"></span></span> to retrieve the value for the department entity.<br>
    ![Profiles](../graphics/Lab1_AI_Agent/11.16.png)<br>

12. Switch from the **Debug** to **Design** tab and click on **Edit** the flow. 

13. Click on empty canvas space then click on **Add Flow Variable**
    
    > Name: **department**<span class="copy-static" data-copy-text="department"><span class="copy" title="Click to copy!"></span></span>.<br>
    >
    > Variable Type: **string**<br>
    >
    > Click **Save**<br>

    ![Profiles](../graphics/Lab1_AI_Agent/11.17.gif)<br>

13. Add **Parse** node to the flow and connect **Set Variable** node to the **Parse** node.
    ![Profiles](../graphics/Lab1_AI_Agent/11.18.gif)<br>

14. Configure the **Parse** node with the following settings:<br>

    > Input Variable: **MetaData_AI**<br>
    > Content Type: **JSON**<br>
    > Output Variable: **department**<br>
    > Path Expression: **$.actions.Transfer_to_different_department[0].input.department**<span class="copy-static" data-copy-text="BlaBlaBla"><span class="copy" title="Click to copy!"></span></span><br>
    > ![Profiles](../graphics/Lab1_AI_Agent/11.19.png)<br>

15. Add **Case** node to the flow and connect the **Parse** node to the **Case** node.
    ![Profiles](../graphics/Lab1_AI_Agent/11.20.gif)<br>

16. Configure the **Case** node with the following settings:<br>

    > Variable: **department**<br>
    > LINK Description: **HR**<span class="copy-static" data-copy-text="HR"><span class="copy" title="Click to copy!"></span></span><br>
    > LINK Description: **Billing<span class="copy-static" data-copy-text="Billing"><span class="copy" title="Click to copy!"></span></span>**<br>
    > 
    > 
    > 
    ![Profiles](../graphics/Lab1_AI_Agent/11.21.png)<br>

17. Connect the **HR**, **Billing** and **Default** cases to the **Queue Contact** node, which should still be present among the flow nodes.
    ![Profiles](../graphics/Lab1_AI_Agent/11.21.gi)<br>

    !!! Note
        You will use your queue **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Queue">Your_Attendee_ID</span>_Queue<span class="copy" title="Click to copy!"></span></span>** during testing and verify the selected case using the **Debug** tool.

22. **Validate** and **Publish** the flow.
    ![Profiles](../graphics/Lab1_AI_Agent/11.26.gi)<br>

23. Dial the support number assigned to your **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Channel">Your_Attendee_ID</span>_Channel<span class="copy" title="Click to copy!"></span></span>** channel. During the conversation with AI Agent **ask to transfer you to the HR department**. The call should park to a queue. After the call is completed. Go to **Debug**, find the call to make sure it went to your queue **HR** case.
    ![Profiles](../graphics/Lab1_AI_Agent/11.27.gi)<br>

<p style="text-align:center"><strong>Congratulations, you have officially completed this mission! 🎉🎉 </strong></p>
