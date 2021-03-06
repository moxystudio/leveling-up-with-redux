import React from "react";
import {
    Code,
    List,
    Cite,
    Quote,
    ListItem,
    CodePane,
    Appear,
    Heading,
    BlockQuote
} from "spectacle";


class Intro extends React.Component {
    render() {
        return (
            <div>
                <Heading size={2} lineHeight={1} caps fit textColor="primary">
                    Immutability
                </Heading>
            </div>
        );
    }
}

class Desc extends React.Component {
    render() {
        return (<div>
            <List textColor="secondary">
                <Appear>
                    <ListItem textSize="34" margin="20px 0">
                        Asynchronous safe
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="34" margin="20px 0">
                        Data that does not change is easier to verify
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="24" margin="20px 46px">
                        Cheap change detection techniques
                    </ListItem>
                </Appear>
                <Appear>
                    <BlockQuote margin="0 46px">
                        <Quote bold={ false } textColor="secondary" textSize="24">ensuring the computationally expensive process of updating the DOM occurs only when it absolutely has to</Quote>
                        <Cite textSize="24" margin="20px 46px">redux.js (shallow compare)</Cite>
                    </BlockQuote>
                </Appear>
                <Appear>
                    <ListItem textSize="34" margin="20px 0">
                        State changes are a consequence of actions being dispatched, which are registered.
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="34" margin="20px 0">
                        Easy to debug (React + Redux DevTools)
                    </ListItem>
                </Appear>
            </List>
        </div>);
    }
}

class Example01 extends React.Component {
    render() {
        return (
            <div>
                <Heading size={3} lineHeight={1} textColor="quaternary" margin="20px 0">
                    <Code>Remove an item from array immutably</Code>
                </Heading>
                <Appear>
                    <div>
                        <CodePane
                            textSize="1.2rem"
                            lang="jsx"
                            source={require("raw-loader!../../assets/immutability01.example")}
                            margin="20px auto"
                            overflow = "overflow" />
                    </div>
                </Appear>
            </div>
        );
    }
}

export default {
    Intro,
    Desc,
    Example01
};
