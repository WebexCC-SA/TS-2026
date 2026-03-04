---
#icon: material/folder-open-outline
icon: material/medal
---

# Mission 5: Configure Transfer Action for a Specific Queue

**<details><summary>What is a Transfer Action? <span style="color: orange;"></span></summary>**

Transfer Action is a task that an AI agent performs by understanding user intents and transferring the interaction back to the WxCC flow with custom data for further processing.

## </details>

## Mission overview

Your mission is to:

Configure the Transfer action to transfer the call to WxCC Voice with custom settings for further processing if the caller wants to talk to the HR or Billing departments.

![Profiles](../graphics/Lab1_AI_Agent/TransferToFlow.png)

---

## Build

### Task 1. Create Transfer to flow action in AI Agent Studio portal

1. From Control Hub, go to **Contact Center** > **Overview** and open up the **Webex AI Agent** Studio portal.
   ![Profiles](../graphics/Lab1_AI_Agent/11.1.png)

2. Open your AI agent with name **<copy><w class="attendee"></w>\_2000_AutoAI_Lab</copy>** and then click on **Actions**.
   ![Profiles](../graphics/Lab1_AI_Agent/11.2.gif)

3. Select **New action** option. Then click on **Create new** and choose **Transfer** action.
   ![Profiles](../graphics/Lab1_AI_Agent/11.3.png)

4. Name the action as **<copy>Transfer_to_different_department</copy>**.<br/> In the **Transfer condition** field, paste **<copy>When the customer wants to transfer the call to HR or Billing department use this Action</copy>**.
   ![Profiles](../graphics/Lab1_AI_Agent/11.4.png)

5. Click on add **New input entity**. Configure it with the following: <br>
   > Entity name: **<copy>department**</copy><br>
   > Entity description: **<copy>Collect if the customer wants to transfer the call to HR or Billing Department**</copy><br>
   > Entity example: **<copy>HR**</copy><br>
   > Entity example: **<copy>Billing**</copy><br>
   ![Profiles](../graphics/Lab1_AI_Agent/11.5.png)

6. Finally, click on **Add** to add the new action.
   ![Profiles](../graphics/Lab1_AI_Agent/11.6.png)

7. **Publish** the AI Agent.
   ![Profiles](../graphics/Lab1_AI_Agent/11.14.png)

### Task 2. Configure voice flow to transfer customers to the HR or Billing queue

1. In [Control Hub](https://admin.webex.com){:target="_blank"}, open your voice flow with the name \*\*<copy>AutonomousAI_Flow_2000_<w class="attendee"></w></copy>\*\*.
   ![Profiles](../graphics/Lab1_AI_Agent/11.7.gif)

2. Click on **Edit** to edit the flow.
   ![Profiles](../graphics/Lab1_AI_Agent/11.8.gif)

3. <span style="color: red;">[Read Only]</span>. In the previous task, we created an action with the **department** entity. The information about the value of the entity can be retrieved from the Activity Output Variable, specifically from **VirtualAgentV2XXXMetaData**.
   In the next steps, we will add the **Set Variable** block to see the MetaData in JSON format, and then we will add the **Parse** and **Case** nodes to handle the logic and distribute the call to the appropriate queue.
   ![Profiles](../graphics/Lab1_AI_Agent/11.11.png)

4. Create new flow variable with name **<copy>MetaData_AI</copy>**. Select type as **string** and then click **Save**.
   ![Profiles](../graphics/Lab1_AI_Agent/11.9.gif)

5. Add **Set Variable** node to the flow and connect **Escalated** output of the **VirtualAgentV2** block to the **Set Variable** node.
   ![Profiles](../graphics/Lab1_AI_Agent/11.10.gif)

6. Click on **Set Variable** node, select Variable as **MetaData_AI**. For the Variable Value, first click on **VirtualAgentV2** block and copy the name of the MetaData Activity Output Variable. Then post this value inside of the {{ }} to the Variable Value field.
   ![Profiles](../graphics/Lab1_AI_Agent/11.12.gif)

7. Connect **Set Variable** block to the **Queue** node for now. **Validate** and **Publish** the Flow.
   ![Profiles](../graphics/Lab1_AI_Agent/11.13.gif)

8. Place test call to the number that is related to you Channel **<copy><w class="attendee"></w>\_2000_Channel</copy>**. During the conversation with AI Agent **ask to transfer you to the HR department**. The call should go to the only Queue that is currently configured in the flow.

9. After the call is completed, click on Debug and review the metadata in the Set Variable block.
   ![Profiles](../graphics/Lab1_AI_Agent/11.14.gif)

10. <span style="color: red;">[Read Only]</span> From MetaData we can see the value of the department entity is "HR".
    ![Profiles](../graphics/Lab1_AI_Agent/11.15.png)

11. <span style="color: red;">[Read Only]</span>. To parse the value in the flow, we need to determine the JSON path to retrieve the value. By using an open-source tool (e.g. [JSONPath Online Evaluator](https://jsonpath.com/){:target="\_blank"}), you can ensure you are using the correct JSON path to extract the value you need. In our case, the JSON path is **$.actions.Transfer_to_different_department[0].input.department** to retrieve the value for the department entity.
    ![Profiles](../graphics/Lab1_AI_Agent/11.16.png)

12. Move from the Debug to **Design** field and click on **Edit** the flow. Create new flow **string** variable with name **<copy>department</copy>**.
    ![Profiles](../graphics/Lab1_AI_Agent/11.17.gif)

13. Add **Parse** block to the flow and connect **Set Variable** block to the **Parse** block.
    ![Profiles](../graphics/Lab1_AI_Agent/11.18.gif)

14. Configure the **Parse** block with the following:<br>

    > Input Variable: **MetaData_AI**<br>
    > Content Type: **JSON**<br>
    > Output Variable: **department**<br>
    > Path Expression: **<copy>$.actions.Transfer_to_different_department[0].input.department</copy>**<br>
    > ![Profiles](../graphics/Lab1_AI_Agent/11.19.png)

15. Add **Case** node to the flow and connect the **Parse** node to the **Case** node.
    ![Profiles](../graphics/Lab1_AI_Agent/11.20.gif)

16. Configure the **Case** node with the following:<br>

    > Variable: **department**<br>
    > LINK Description: **<copy>HR</copy>**<br>
    > LINK Description: **<copy>Billing</copy>**<br>
    > ![Profiles](../graphics/Lab1_AI_Agent/11.21.png)

17. Bring two **Queue Contact** nodes to the flow.
    ![Profiles](../graphics/Lab1_AI_Agent/11.21.gif)

18. Configure one **Queue node** with **2000_HR_Queue** and the other one with **2000_Billing_Queue**.
    ![Profiles](../graphics/Lab1_AI_Agent/11.22.gif)

19. Connect **HR** output from **Case** node to the **HR Queue** node. Connect **HR Queue** node to the **Play Music** node.
    ![Profiles](../graphics/Lab1_AI_Agent/11.23.gif)

20. Connect **Billing** output from **Case** node to the **Billing Queue** node. Connect **Billing Queue** node to the **Play Music** node.
    ![Profiles](../graphics/Lab1_AI_Agent/11.24.gif)

21. Connect **Default** output from **Case** node to the **<copy><w class="attendee"></w>\_2000_Voice_Queue</copy>** Queue node.
    ![Profiles](../graphics/Lab1_AI_Agent/11.25.gif)

22. **Validate** and **Publish** the flow.
    ![Profiles](../graphics/Lab1_AI_Agent/11.26.gif)

23. Place test call to the number that is related to you Channel **<copy><w class="attendee"></w>\_2000_Channel</copy>**. During the conversation with AI Agent **ask to transfer you to the HR department**. The call should park to a queue. After the call is completed. Go to Debug, find the call to make sure it went to the HR Queue.
    ![Profiles](../graphics/Lab1_AI_Agent/11.27.gif)

<p style="text-align:center"><strong>Congratulations, you have officially completed this mission! 🎉🎉 </strong></p>
