import React from "react";
import {
    Code,
    CodePane,
    Appear,
    Heading,
    Text
} from "spectacle";


class Intro extends React.Component {
    render() {
        return (
            <div>
                <Heading size={2} lineHeight={1} caps fit textColor="secondary">
                    Relation between UI and Data
                </Heading>
            </div>
        );
    }
}

class Desc extends React.Component {
    render() {
        return (<div>
            <Appear>
                <Text>
                    What do we need to have redux working with our app?
                </Text>
            </Appear>
        </div>);
    }
}

class BuildStore extends React.Component {
    render() {
        return (
            <div>
                <Heading size={3} lineHeight={1} textColor="quaternary" margin="20px 0">
                    <Code>buildStore</Code>
                </Heading>
                <Appear>
                    { /* eslint-disable */ }
                    <CodePane
                        textSize="1.2rem"
                        lang="jsx"
                        source={require("raw-loader!../../assets/buildStore01.example")}
                        margin="20px auto"
                        overflow = "overflow"
                    />
                    { /* eslint-enable */ }
                </Appear>
            </div>
        );
    }
}

class Connect extends React.Component {
    render() {
        return (
            <div>
                <Heading size={3} lineHeight={1} textColor="quaternary" margin="20px 0">
                    <Code>connect</Code>
                </Heading>
                <Appear>
                    { /* eslint-disable */ }
                    <CodePane
                        textSize="1.2rem"
                        lang="jsx"
                        source={require("raw-loader!../../assets/connect01.example")}
                        margin="20px auto"
                        overflow = "overflow"
                    />
                    { /* eslint-enable */ }
                </Appear>
            </div>
        );
    }
}

class Selectors extends React.Component {
    render() {
        return (
            <div>
                <Heading size={3} lineHeight={1} textColor="quaternary" margin="20px 0">
                    <Code>selectors</Code>
                </Heading>
                <Appear>
                    { /* eslint-disable */ }
                    <CodePane
                        textSize="1.2rem"
                        lang="jsx"
                        source={require("raw-loader!../../assets/selectors01.example")}
                        margin="20px auto"
                        overflow = "overflow"
                    />
                    { /* eslint-enable */ }
                </Appear>
            </div>
        );
    }
}

export default {
    Intro,
    Desc,
    BuildStore,
    Connect,
    Selectors
};