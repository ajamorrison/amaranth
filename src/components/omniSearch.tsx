import { debounce } from "debounce";
import * as React from "react";
import { Search } from "semantic-ui-react";

interface Result {
    title: string;
    description: string;
}
interface Category {
    name: string;
    results: Result[];
}

const searchResults = {
    "sensor": {
        name: "sensor",
        results: [
            {
                title: "Little, Kihn and Leffler",
                description: "Multi-layered motivating application",
            },
            {
                title: "Howe Group",
                description: "Multi-layered composite knowledge base",
            },
            {
                title: "Welch, Welch and Bernhard",
                description: "Grass-roots web-enabled system engine",
            },
            {
                title: "Volkman, Rohan and Buckridge",
                description: "Synchronised mission-critical utilisation",
            },
            {
                title: "Homenick, Tremblay and Abernathy",
                description: "Switchable leading edge open architecture",
            },
        ],
    },
    "hard drive": {
        name: "hard drive",
        results: [
            {
                title: "Hyatt, Mosciski and Aufderhar",
                description: "Versatile bandwidth-monitored pricing structure",
            },
            {
                title: "Berge Group",
                description: "Proactive modular frame",
            },
            {
                title: "Cronin, Batz and Bergstrom",
                description: "Right-sized well-modulated flexibility",
            },
            {
                title: "Quigley, Stanton and Hyatt",
                description: "Face to face tangible superstructure",
            },
            {
                title: "Armstrong, Thiel and Wuckert",
                description: "Synchronised intermediate budgetary management",
            },
        ],
    },
};

export default class OmniSearch extends React.Component<
{
    // Properties
},
{
    // Internal State
    isLoading: boolean,
    value: string,
    results: any,
}> {


    public componentWillMount() {
        this.resetComponent();
    }

    public resetComponent = () => this.setState({ isLoading: false, results: searchResults, value: "" });

    public isLoading() {
        this.setState({ isLoading: true });
    }

    /**
     * Debounced function for handling search input. Creates and sends off
     * a AJAX request and populates the search results with them.
     */
    public handleSearchChange = (e, { value }) => {

        this.setState({ isLoading: true, value});

        setTimeout(() => {

            const xhr = new XMLHttpRequest();
            xhr.open("GET", "/search?q=" + this.state.value);

            xhr.send(null);

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        // tslint:disable-next-line:no-console
                        console.log("Record Found");
                    } else {
                        // tslint:disable-next-line:no-console
                        console.log("Record Not Found");
                    }
                }
            };

            this.setState({
                isLoading: false,
            });
        }, 500);

    }

    public render() {

        const { isLoading, value, results } = this.state;

        return (
            <Search
                onSearchChange={debounce(this.handleSearchChange, 100, true)}
                results={results}
                value={value}
                loading={isLoading}
                category
                style={{
                    position: "absolute",
                    top: "50px",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            />
        );
    }
}
