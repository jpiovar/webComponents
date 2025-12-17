import React from 'react';
import { Grid, Column } from '@carbon/react';

const WebPage: React.FC = () => {
    return (
        <Grid className="web-page" fullWidth>
            <Column lg={16} md={8} sm={4}>
                <h1>Web Components Demo</h1>
                <p style={{ marginBottom: '2rem' }}>
                    This page demonstrates the usage of React components wrapped as Web Components.
                </p>
            </Column>

            <Column lg={8} md={4} sm={4}>
                <h2>Buttons</h2>
                <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column', marginTop: '1rem' }}>
                    <div>
                        <h3>Primary</h3>
                        <custom-button variant="primary">Primary Button</custom-button>
                    </div>
                    <div>
                        <h3>Secondary</h3>
                        <custom-button variant="secondary">Secondary Button</custom-button>
                    </div>
                    <div>
                        <h3>Danger</h3>
                        <custom-button variant="danger">Danger Button</custom-button>
                    </div>
                </div>
            </Column>

            <Column lg={8} md={4} sm={4}>
                <h2>Inputs</h2>
                <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column', marginTop: '1rem' }}>
                    <custom-input
                        id="demo-input-1"
                        label="Name"
                        placeholder="Enter your name"
                        helperText="This uses the <custom-input> element"
                    />
                    <custom-input
                        id="demo-input-2"
                        label="Password"
                        type="password"
                        placeholder="Enter password"
                    />
                </div>
            </Column>
        </Grid>
    );
};

export default WebPage;
