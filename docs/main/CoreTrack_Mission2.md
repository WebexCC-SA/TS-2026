---
#icon: material/folder-open-outline
icon: material/medal
---



## Story

Skill-Based Routing (SBR) intelligently matches customer contacts with agents who have the specific expertise needed (e.g., language, product knowledge, service level), using configurable skill requirements and relaxation rules to ensure the best fit, which improves resolution and satisfaction by avoiding simple "first-available" routing.

This mission focuses on enhancing customer satisfaction by enabling Skill-Based Routing in Webex Contact Center call flow to direct the call to the qualified agent. At the same time, we will look into the effectiveness of skill relaxation rules to reduce the waiting time for callers if all more qualified agents are busy.

## Call Flow Overview

1. A new call enters the flow. </br>
2. The flow executes the logic and places the call into a skill-based queue, applying the skill requirements and relaxation rules defined for the queue.</br>
3. Once the call is placed in the queue, the following logic applies:
       - If there is an available agent with matching skills, the call is routed to that person.</br>
       - If there are no available agents with matching skills, the call waits in the queue until the skill-relaxation rule is applied.</br>
       - If the skill-relaxation rule is applied, it lowers the skill requirements for the call, and Webex Contact Center starts looking for an agent using the updated requirements.</br>

## Mission Details

Your mission is to:

1. Switch to a skill-based queue and define the skill requirement for it.
2. Configure a skill relaxation rule to lower skill requirement after a time interval.
3. Make test calls and verify the agent selection logic before and after skill relaxation.

!!! Note
    The Skill Definition and Skill Profile are preconfigured for you and linked to your agent account. Your task is to focus on configuring the flow and ensuring the agent is selected properly depending on current skill requirements.

### Preconfigured entities      
     
- Skill Definition: **Webex CC Lab Expert**.
- Skill Profile: **Webex CC Lab Skill Profile** with **Webex CC Lab Expert** skill set as 5.
- Skill Profile is associated with your agent account **wxcclabs+agent_ID<span class="attendee-id-placeholder">Your_Attendee_ID</span>@gmail.com**.

## Part 1 - Add Skill-Based Queue

### Build
1. Switch to the Flow Designer tab with your **<span class="attendee-id-container">Main_Flow_<span class="attendee-id-placeholder" data-prefix="Main_Flow_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>**, make sure **Edit** toggle is **ON**.

    !!! Note
        If you closed browser tab with Flow Designer before, switch to [Webex Control Hub](https://admin.webex.com){:target="_blank"}. Look for the contact center option in the left pane under **SERVICES – Contact Center** and click on it. Then navigate to **Flows**, search for your flow <span class="attendee-id-container">**Main_Flow_<span class="attendee-id-placeholder" data-prefix="Main_Flow_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>** and click on it to open it in the flow designer.

2. Click on **Queue** node and select **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_SBR_Queue">Your_Attendee_ID</span>_SBR_Queue<span class="copy" title="Click to copy!"></span></span>** Then scroll down to the **Skill Requirements** section and configure the following fields in the **Skill Requirement** block:

    > - Select the skill name: **Static**
    >
    > - Skill (drop-down list): **Webex CC Lab Expert**
    > <br/><br/>
    > - Select the condition: **Static**
    >
    > - Condition (drop-down list): **>=**
    > <br/><br/>
    > - Select the value: **Static**
    >
    > - Value (drop-down list): **3**

    ![profiles](../graphics/Lab1/L1M2_Conf_SBR_Q.gif)

3. Validate and publish the flow:

    > - Enable the **Validation** toggle in the bottom right corner of the flow designer window to check for any potential flow errors and recommendations.
    >
    > - If there are no **Flow Errors** after validation is complete, click on **Publish Flow** next to it.
    >
    > - In the pop-up window, ensure that the **Latest** label is selected in the **Add Version Label(s)** list, then click **Publish Flow**.

### Checkpoint Test

!!! Note
    The skill requirement we have set for **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_SBR_Queue">Your_Attendee_ID</span>_SBR_Queue** is applied to every call that lands in that queue.

    Since we set the requirement **Webex CC Lab Expert >= 3** and the current value of **Webex CC Lab Expert** skill configured under the skill profile **Webex CC Lab Skill Profile** assigned to your agent account is **5**, the agent meets skill requirement for the call and should be selected to take it.

    Let's test this.

1. Your Agent desktop session should be still active but if not, use Webex CC Desktop application ![profiles](../graphics/overview/Desktop_Icon40x40.png) and login with agent credentials you have been provided **wxcclabs+agent_ID<span class="attendee-id-placeholder">Your_Attendee_ID</span>@gmail.com** and become **Available** 
2. Make a test call to the Support Number, ensure the call is assigned to your Agent and answer it.
3. Finish the call.

---

## Part 2 - Raise Skill Requirement

!!! Note
    Let's raise skill requirement to see what happens if there are no agents with the appropriate skill level available. 

### Build

1. Switch to your flow and make the following changes to raise skill requirement:

    > - Click on **Queue** node - you should see **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_SBR_Queue">Your_Attendee_ID</span>_SBR_Queue** skill-based queue configured there.
    >
    > - Scroll down to the **Skill Requirements** section and update the required value for **Webex CC Lab Expert** skill from 3 to 7. The full requirement should be **Webex CC Lab Expert >= 7**:
  
    ![profiles](../graphics/Lab1/L1M2_Raise_Skill_Req.gif)

2. Validate and publish the flow:

    > - Enable the **Validation** toggle in the bottom right corner of the flow designer window to check for any potential flow errors and recommendations.
    >
    > - If there are no **Flow Errors** after validation is complete, click on **Publish Flow** next to it.
    >
    > - In the pop-up window, ensure that the **Latest** label is selected in the **Add Version Label(s)** list, then click **Publish Flow**.

### Checkpoint Test #2

!!! Note
    Since we have raised the requirement **Webex CC Lab Expert >= 7** and the current value of **Webex CC Lab Expert** skill for your agent is still **5**, the agent no longer meets the skill requirement for the call and **should not** be selected to pick it up.

    Let's test this.

1. Open your Webex CC Desktop application ![profiles](../graphics/overview/Desktop_Icon40x40.png) and make sure your agent is in the **Available** state. 
2. Make a test call to the Support Number. Ensure the caller hears the welcome prompt, then the call is placed in a queue and the caller hears music in queue.
3. Make sure the call stays in the queue and not assigned to your agent even though the agent is available.
4. Finish the call.

## Part 3 - Add Skill Relaxation Rule

!!! Note
    The skill relaxation rule allows for lowering the skill requirements for the call after a certain period of time. This helps to reduce the waiting time for callers by engaging less qualified agents when all more qualified agents are busy.

    Since our current skill requirement is **Webex CC Lab Expert >= 7** and our agent account has skill profiviency **Webex CC Lab Expert = 5**, let's configure the skill relaxation rule to lower the skill requirement to **Webex CC Lab Expert >= 4** after 15 seconds.

### Build

1. Switch to your flow and click on **Queue** node - you should see **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_SBR_Queue">Your_Attendee_ID</span>_SBR_Queue** skill-based queue configured there along with skill requirement **Webex CC Lab Expert >= 7**.
    
    > Scroll down to the **Skill Relaxation** section, turn on **Enable Skill Relaxation** toggle and lower skill requirement **Webex CC Lab Expert** by configuring the following fields of **Skill Relaxation Step 1** block:
    > <br/><br/>
    >
    > - After waiting in queue for: **15** seconds
    > <br/><br/>
    > - Select the skill name: **Static**
    >
    > - Skill (drop-down list): **Webex CC Lab Expert**
    > <br/><br/>
    > - Select the condition: **Static**
    >
    > - Condition (drop-down list): **>=**
    > <br/><br/>
    > - Select the value: **Static**
    >
    > - Value (drop-down list): **4**
  
    ![profiles](../graphics/Lab1/L1M2_Set_Skill_Relax.gif)

2. Validate and publish the flow:

    > - Enable the **Validation** toggle in the bottom right corner of the flow designer window to check for any potential flow errors and recommendations.
    >
    > - If there are no **Flow Errors** after validation is complete, click on **Publish Flow** next to it.
    >
    > - In the pop-up window, ensure that the **Latest** label is selected in the **Add Version Label(s)** list, then click **Publish Flow**.

### Final mission test

!!! Note
    We have lowered the skill requirement for **Webex CC Lab Expert** from **>= 7** to **>= 4** after 15 seconds in the queue.
    
    Since the current skill proficiency of **Webex CC Lab Expert** for your agent is still **5**, the agent does not meet the skill requirement for the call when it lands in the queue and **should not** be selected to answer it. Therefore, the call will remain in the queue. However, after 15 seconds, the skill requirement will be lowered to **Webex CC Lab Expert >= 4**, and the agent should be selected to answer it.

    Let's test this.

1. Open your Webex CC Desktop application ![profiles](../graphics/overview/Desktop_Icon40x40.png) and make sure your agent is in the **Available** state. 
2. Make a test call to the Support Number. Ensure that the caller hears the welcome prompt, then the call is placed in a queue and caller hears music in queue.
3. Make sure the call stays in the queue for 15 seconds before being assigned to your agent.
4. Answer the call and verify that it works.
5. Finish the call.

---

## Post Testing steps

1. <span style="color: red;">**[IMPORTANT]**</span> Now we need to revert the configuration of **Queue** node in your flow to the non-SBR queue **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Queue">Your_Attendee_ID</span>_Queue** as we are going to use same flow in upcoming tasks:

    > - Click on the **Queue** node on the flow canvas.
    >
    > - Navigate to the node settings panel on the right.
    >
    > - Scroll down and select **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Queue">Your_Attendee_ID</span>_Queue<span class="copy" title="Click to copy!"></span></span>** from **Queue** dropdown list.

    ![profiles](../graphics/Lab1/L1M2_Revert_Non_SBR.gif) 

2. Validate and publish the flow:

    > - Enable the **Validation** toggle in the bottom right corner of the flow designer window to check for any potential flow errors and recommendations.
    >
    > - If there are no **Flow Errors** after validation is complete, click on **Publish Flow** next to it.
    >
    > - In the pop-up window, ensure that the **Latest** label is selected in the **Add Version Label(s)** list, then click **Publish Flow**.

3. Open your Webex CC Desktop application ![profiles](../graphics/overview/Desktop_Icon40x40.png) and make sure your agent is in the **Available** state.
4. Make another test call to the Support Number and confirm that the caller hears the welcome message, and then the call is instantly assigned to your agent after entering the queue.

---
<p style="text-align:center"><strong>Congratulations, you have succesfully completed Skill-Based Routing mission! 🎉🎉 </strong></p>
