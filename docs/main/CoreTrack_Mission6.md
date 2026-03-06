---
#icon: material/folder-open-outline
icon: material/medal
---



## Story

In Webex Contact Center, subflows modularize complex workflows by packaging reusable, independent functions (like business hour checks, queue treatment callback collection, error handling, etc.) into separate mini-flows, which are then called from main flows. Their purpose is to simplify development, reduce main flow size, improve organization, and ensure consistency by promoting code reuse for common tasks, making flows cleaner and easier to manage.
In the scope of this mission you will use a subflow template to automate queue treatment in the Webex Contact Center environment. You will configure and test two ways of how to define parameters necessary to call the sublow - define them at the main flow level and override at the channel level.
The main goal is to improve the customer experience while waiting in a queue by playing music, delivering messages, and looping until a predefined condition is met.

## Call Flow Overview

1. A new call enters the flow. </br>
2. The flow executes the logic and places the call into a queue.</br>
3. Once the call is placed in the queue, the main flow calls the Subflow sending few parameters to it.
4. The Subflow executes the following logic **two times** based on the received parameters:
    - Plays a music in queue. The duration is defined by the parameter.</br>
    - Plays a Text-To-Speech message. The text is fetched from the parameter.</br>
    - Plays a music in queue of the same duration again.</br>

## Mission Details

Your mission is to:

1. Create a Subflow from the template.
2. Call the Subflow from the main flow with proper parameters.
3. Override the Subflow calling parameters at the Channel level.
3. Make test calls and verify queue treatment done by the Subflow.

---

## Part 1 - Integrate a Subflow with your Main Flow

### Build

1. Switch to [Webex Control Hub](https://admin.webex.com){:target="_blank"}. Look for the contact center option in the left pane under **SERVICES – Contact Center** and click on it.
2. Navigate to **Flows** in the left pane and click on **Subflows** tab at the top of the main window. Then click on **Manage Subflows** dropdown list at the top-right part of the main window and select **Create Subflows**.
3. **Create a new subflow** tab will be opened. Navigate to **Subflow Templates**.
4. Choose **Queue Treatment Subflow** template and click **Next**.

    !!! Note
        You can press **View Details** link under the template name to observe flow structure and read flow description before proceeding with the template.

5. Name your subflow as <span class="attendee-id-container">**Subflow_<span class="attendee-id-placeholder" data-prefix="Subflow_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>** Then click on **Create Subflow**.

    !!! Note
        **Edit** should be set to **On** when you create new flow, but if not switch it from **Edit: Off** mode to **Edit: On** at the top of the page.

    ![profiles](../graphics/Lab1/L1M8_Create_Subflow_Template.gif)

6. In the bottom right corner toggle **Validation** from **Off** to **On** to check for any potential flow errors and recommendations. 

    !!! Note
        You can ignore recommendations but cannot skip errors.

7. Click **Publish Subflow**. In popped-up window, make sure the **Latest** label is selected in the **Add Version Label(s)** list, then click **Publish Subflow**.
  
    ![profiles](../graphics/Lab1/L1M8_Publish_Subflow.gif)

8. Switch to the Flow Designer tab with your **<span class="attendee-id-container">Main_Flow_<span class="attendee-id-placeholder" data-prefix="Main_Flow_">Your_Attendee_ID</span></span>** opened and make sure **Edit** toggle is **ON**.

    !!! Note
        If you closed browser tab with Flow Designer before, switch to [Webex Control Hub](https://admin.webex.com){:target="_blank"}. Look for the contact center option in the left pane under **SERVICES – Contact Center** and click on it. Then navigate to **Flows**, search for your flow <span class="attendee-id-container">**Main_Flow_<span class="attendee-id-placeholder" data-prefix="Main_Flow_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>** and click on it to open it in the flow designer.

9. Click on any empty place at flow canvas and make sure you see **General Settings** appeared on the right pane. The scroll down to the **Variable Definition** section and add the following two **Flow Variables** by pressing **Add Flow Variable** button:

    > - Name: **subflowDuration**
    > - Variable Type: **Integer**
    > - Default Value: **5**
    > - Turn on the toggle **Enable External Override**. Make sure **Resource Type** is set as **None (default)**
    > <br/><br>
    > - Name: **subflowMessage**
    > - Variable Type: **String**
    > - Default Value: **Thanks for your patience. Please hold on while we find an expert for you.**
    > - Turn on the toggle **Enable External Override**. Make sure **Resource Type** is set as **None (default)**

    ![profiles](../graphics/Lab1/L1M8_Create_Flow_Vars.gif)

10. Delete the **Music** node connected to the **Queue** node. The **EndFlow** node which was connected to the **Music** node becomes unconnected at this step.
11. Go to the activity library pane on the left, scroll up to the top and click on the **Subflow** tab.
12. Find your subflow <span class="attendee-id-container">**Subflow_<span class="attendee-id-placeholder" data-prefix="Subflow_">Your_Attendee_ID</span></span>**, drag it to flow canvas and place right after your **Queue** node. Connect it to the other nodes in the following way:

    > - The output of the **Queue** node to the input of the <span class="attendee-id-container">**Subflow_<span class="attendee-id-placeholder" data-prefix="Subflow_">Your_Attendee_ID</span></span>**.
    > - The main (aka, top) output of the <span class="attendee-id-container">**Subflow_<span class="attendee-id-placeholder" data-prefix="Subflow_">Your_Attendee_ID</span></span>** node to the input of **PlayMessage** node.
    > - The **Undefined Error** (aka, bottom) output of the <span class="attendee-id-container">**Subflow_<span class="attendee-id-placeholder" data-prefix="Subflow_">Your_Attendee_ID</span></span>** node to the input of unconnected **EndFlow** node.
    > - The output of the **PlayMessage** node to the input of the <span class="attendee-id-container">**Subflow_<span class="attendee-id-placeholder" data-prefix="Subflow_">Your_Attendee_ID</span></span>** node.

    ![profiles](../graphics/Lab1/L1M8_Add_Subflow.gif)

13. Click on the <span class="attendee-id-container">**Subflow_<span class="attendee-id-placeholder" data-prefix="Subflow_">Your_Attendee_ID</span></span>** node. Go to the node settings pane on the right and set the following parameters:
    
    > - Subflow Label: **Latest**
    >

    Scroll down to the **Subflow Input Variables** section and configure the following mapping:
    
    >
    > - Current flow variable: **subflowDuration**
    >
    > - Subflow Input Variable: **musicDuration**
    >
    
    Press **Add New** button to configure the mapping for the second variable:

    >
    > - Current flow variable: **subflowMessage**
    >
    > - Subflow Input Variable: **queueMessage**

    ![profiles](../graphics/Lab1/L1M8_Map_Subflow_Vars.gif)

14. Click on the **PlayMessage** node. Go to the node settings pane on the right and paste the following message into the **Text-to-Speech Message** field:
    
    > - ***We apologize, but all our agents are currently busy. Your waiting time may be longer than expected.***<span class="copy-static" title="Click to copy!"data-copy-text="We apologize, but all our agents are currently busy. Your waiting time may be longer than expected."><span class="copy"></span></span>

15. Validate and publish the flow:

    > - Enable the **Validation** toggle in the bottom right corner of the flow designer window to check for any potential flow errors and recommendations.
    >
    > - If there are no **Flow Errors** after validation is complete, click on **Publish Flow** next to it.
    >
    > - In the pop-up window, ensure that the **Latest** label is selected in the **Add Version Label(s)** list, then click **Publish Flow**.

    ![profiles](../graphics/Lab1/L1M8_Update_Last_Prompt.gif)

### Checkpoint Test

!!! Note
    Since we called the <span class="attendee-id-container">**Subflow_<span class="attendee-id-placeholder" data-prefix="Subflow_">Your_Attendee_ID</span></span>** with our custom parameters the caller should hear the following:

    - Repeated two times: 5 seconds of music in queue + our custom message for the subflow ***Thanks for your patience. Please hold on while we find an expert for you.*** + 5 more seconds of music in queue.

    - The message in the main flow: ***We apologize, but all our agents are currently busy. Your waiting time may be longer than expected.***

    - Then the subflow should be called again and start playing 5 seconds of music in queue again.

    Let's test this.

1. <span style="color: red;">[IMPORTANT]</span> Please keep in mind that the agent **does not** need to take call during this mission. Thus, if you logged in to Webex CC Desktop application, please select any Idle state there before making test calls. For example, **Busy**.
2. Make a test call to the Support Number, ensure that the caller hears all voice prompts described in the note above.
3. Finish the call.

---

## Part 2 - Override flow variables at the Channel level

### Build

1. Switch back to **Contact Center** settings on [Webex Control Hub](https://admin.webex.com){:target="_blank"}.
2. Navigate to **Channels** in the left pane. Search for your channel **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Channel">Your_Attendee_ID</span>_Channel<span class="copy" title="Click to copy!"></span></span>** and click on it.
3. Scroll down to the **Entry point settings** section and look at **Override flow settings** part of it. You should see two variables there:

    > - **subDuration**
    >
    > - **subMessage**

4. Modify these variables in the following way and save changes.

    Variable **subflowDuration**:<br/>

    > - Turn on **Override value** toggle in the **Value** column.
    >
    > - Set new value as **10**.
    >

    Variable **subflowMessage**:<br/>
    
    >
    > - Turn on **Override value** toggle in the **Value** column.
    >
    > - Set new value as ***Thanks for staying with us. Your call will be answered by the next available agent.***.

    !!! Note
        Please keep in mind that there is **no need to validate and publish your flow** one more time after you have overridden flow variables at the channel level.

    ![profiles](../graphics/Lab1/L1M8_Override_Vars_Channel.gif)

### Checkpoint Test

!!! Note
    Since we have overridden **subDuration** and **subMessage** variables at the channel level the <span class="attendee-id-container">**Subflow_<span class="attendee-id-placeholder" data-prefix="Subflow_">Your_Attendee_ID</span></span>** is now being called with these new values. Thus, the caller should hear updated music duration and new message:
    
    - Repeated two times: 10 seconds of music in queue + our overrided custom message for the subflow ***Thanks for staying with us. Your call will be answered by the next available agent.*** + 10 more seconds of music in queue.
    
    - The same message in the main flow: ***We apologize, but all our agents are currently busy. Your waiting time may be longer than expected.***

    - Then the subflow should be called again and start playing 15 seconds of music in queue again.
    
    Let's test this.

1. <span style="color: red;">[IMPORTANT]</span> Please keep in mind that the agent **does not** need to take call during this mission. Thus if you logged in to Webex CC Desktop application, please select any Idle state there before making test calls. For example, **Busy**.
2. Make a test call to the Support Number, ensure that the caller hears all voice prompts described in the note above.
3. Finish the call.

---
<p style="text-align:center"><strong>Congratulations, you have succesfully completed Subflow and Variable Override mission! 🎉🎉 </strong></p>
