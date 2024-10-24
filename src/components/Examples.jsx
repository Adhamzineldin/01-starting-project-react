import TabButton from "./TabButton";
import {useState} from "react";
import {EXAMPLES} from "../data.js";
export default function Examples() {
    const [selectedTab, setSelectedTopic] = useState(EXAMPLES["components"]);
    function handleClick(selectedButton) {
         setSelectedTopic(EXAMPLES[selectedButton]);
    }

    return(
      <section id="examples">
          <h2>Examples</h2>
        <menu>
            <TabButton onSelect={() => handleClick("components")}>Components</TabButton>
            <TabButton onSelect={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleClick("props")}>Props</TabButton>
            <TabButton onSelect={() => handleClick("state")}>State</TabButton>
        </menu>
          <div id="tab-content">
              <h3>{selectedTab.title}</h3>
              <p>{selectedTab.description}</p>
                <pre>
                    <code>
                        {selectedTab.code}
                    </code>
                </pre>
          </div>


      </section>
    );
}