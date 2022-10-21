import React from 'react';

class SideBarToggle extends React.Component {
    public state = { sidBarToggleActive: false };

    public constructor(props: {} | Readonly<{}>) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
    }

    private handleToggle(): void {
        this.setState({ sidBarToggleActive: !this.state.sidBarToggleActive });
        document.body.classList.toggle('mobile-nav-active');
    }

    render(): JSX.Element {
        const { sidBarToggleActive } = this.state;
        return (
            <i
                className={
                    sidBarToggleActive
                        ? 'bi mobile-nav-toggle d-xl-none bi-x'
                        : 'bi mobile-nav-toggle d-xl-none bi-list'
                }
                onClick={this.handleToggle}
            />
        );
    }
}

export default SideBarToggle;
