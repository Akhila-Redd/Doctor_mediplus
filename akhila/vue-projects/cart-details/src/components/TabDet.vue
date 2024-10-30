<template>

    <div class="tab-container">
        <div class="tabs">
            <a href="#tab1" class="tab-button active">Tab 1</a>
            <a href="#tab2" class="tab-button">Tab 2</a>
            <a href="#tab3" class="tab-button">Tab 3</a>
            <a href="#tab4" class="tab-button">Tab 4</a>
            <a href="#tab5" class="tab-button">Tab 5</a>
        </div>

        <div id="tab1" class="tab-content active">
            <h2>Content for Tab 1</h2>
            <p>This is the content for Tab 1.</p>
        </div>
        <div id="tab2" class="tab-content">
            <h2>Content for Tab 2</h2>
            <p>This is the content for Tab 2.</p>
        </div>
        <div id="tab3" class="tab-content">
            <h2>Content for Tab 3</h2>
            <div class="sub-tabs">
                <a href="#subtab1" class="sub-tab-button active">Sub-tab 1</a>
                <a href="#subtab2" class="sub-tab-button">Sub-tab 2</a>
                <a href="#subtab3" class="sub-tab-button">Sub-tab 3</a>
                <a href="#subtab4" class="sub-tab-button">Sub-tab 4</a>
                <a href="#subtab5" class="sub-tab-button">Sub-tab 5</a>
                <a href="#subtab6" class="sub-tab-button">Sub-tab 6</a>
                <a href="#subtab7" class="sub-tab-button">Sub-tab 7</a>
                <a href="#subtab8" class="sub-tab-button">Sub-tab 8</a>
                <a href="#subtab9" class="sub-tab-button">Sub-tab 9</a>
            </div>
            <div class="sub-tab-contents">
                <div id="subtab1" class="sub-tab-content active">
                    <h3>Content for Sub-tab 1</h3>
                    <p>This is the content for Sub-tab 1.</p>
                </div>
                <div id="subtab2" class="sub-tab-content">
                    <h3>Content for Sub-tab 2</h3>
                    <p>This is the content for Sub-tab 2.</p>
                </div>
                <div id="subtab3" class="sub-tab-content">
                    <h3>Content for Sub-tab 3</h3>
                    <p>This is the content for Sub-tab 3.</p>
                </div>
                <div id="subtab4" class="sub-tab-content">
                    <h3>Content for Sub-tab 4</h3>
                    <p>This is the content for Sub-tab 4.</p>
                </div>
                <div id="subtab5" class="sub-tab-content">
                    <h3>Content for Sub-tab 5</h3>
                    <p>This is the content for Sub-tab 5.</p>
                </div>
                <div id="subtab6" class="sub-tab-content">
                    <h3>Content for Sub-tab 6</h3>
                    <p>This is the content for Sub-tab 6.</p>
                </div>
                <div id="subtab7" class="sub-tab-content">
                    <h3>Content for Sub-tab 7</h3>
                    <p>This is the content for Sub-tab 7.</p>
                </div>
                <div id="subtab8" class="sub-tab-content">
                    <h3>Content for Sub-tab 8</h3>
                    <p>This is the content for Sub-tab 8.</p>
                </div>
                <div id="subtab9" class="sub-tab-content">
                    <h3>Content for Sub-tab 9</h3>
                    <p>This is the content for Sub-tab 9.</p>
                </div>
            </div>
        </div>
        <div id="tab4" class="tab-content">
            <h2>Content for Tab 4</h2>
            <p>This is the content for Tab 4.</p>
        </div>
        <div id="tab5" class="tab-content">
            <h2>Content for Tab 5</h2>
            <p>This is the content for Tab 5.</p>
        </div>
    </div>

</template>
<!-- <style>
.tab-container {
    width: 30%;
    margin: auto;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.tabs {
    display: flex;
    border-bottom: 1px solid #ccc;
}
.tab-button {
    flex: 1;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    color: #333;
    background-color: #f1f1f1;
    border: none;
    cursor: pointer;
    /* margin-left: 10px; */
    transition: background-color 0.3s;
}
.tab-button:hover {
    background-color: #ddd;
}
.tab-button {
    background-color: #fff;
    font-weight: bold;
    border-top: 2px solid #007bff;
}
.tab-content {
    display: none;
    padding: 20px;
}
.tab-content:target {
    display: block;
}
</style> -->

<style>
body {
    font-family: Arial, sans-serif;
}

.tab-container {
    width: 80%;
    margin: auto;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.tabs {
    display: flex;
    border-bottom: 1px solid #ccc;
}

.tab-button {
    flex: 1;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    color: #333;
    background-color: #f1f1f1;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
}

.tab-button:hover {
    background-color: #ddd;
}

.tab-button.active {
    background-color: #fff;
    font-weight: bold;
    border-top: 2px solid #007bff;
}

.tab-content {
    display: none;
    padding: 20px;
}

.tab-content:target {
    display: block; /* Show content for the targeted tab */
}

.tab-content:first-of-type {
    display: block; /* Show first tab content by default */
}

.sub-tabs {
    margin-top: 20px;
    border-bottom: 1px solid #ccc;
}

.sub-tab-button {
    padding: 8px;
    text-decoration: none;
    color: #333;
    background-color: #e7e7e7;
    border: none;
    cursor: pointer;
    margin: 0 5px;
    display: inline-block;
    transition: background-color 0.3s;
}

.sub-tab-button:hover {
    background-color: #ddd;
}

.sub-tab-button.active {
    background-color: #fff;
    font-weight: bold;
    border-bottom: 2px solid #007bff;
}

.sub-tab-contents {
    margin-top: 20px;
}

.sub-tab-content {
    display: none; /* Hide all sub-tab contents by default */
    padding: 15px;
}

.sub-tab-content.active {
    display: block; /* Show the active sub-tab content */
}

/* Show the first sub-tab content by default */
.sub-tab-content:first-of-type {
    display: block; /* Show first sub-tab content */
}

/* New rule for sub-tabs targeting */
.sub-tab-content:target {
    display: block; /* Show content for the targeted sub-tab */
}

</style>