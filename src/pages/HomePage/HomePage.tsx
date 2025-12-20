import { useState } from 'react';
import {
    Button,
    TextInput,
    Grid,
    Column,
    Tile
} from '@carbon/react';
import { Add, Save } from '@carbon/icons-react';
import { CustomButton } from '../../components';
import './HomePage.scss';

export default function HomePage() {
    const [inputValue, setInputValue] = useState('');

    return (
        <Grid>
            <Column lg={16} md={8} sm={4}>
                <div className="app-header">
                    <h1>React + TypeScript + Vite + Carbon</h1>
                    <p className="subtitle">
                        A modern web application with IBM Carbon Design System
                    </p>
                </div>
            </Column>

            <Column lg={8} md={4} sm={4}>
                <Tile className="demo-tile">
                    <h3>Carbon Components</h3>
                    <div className="component-demo">
                        <TextInput
                            id="text-input"
                            labelText="Enter some text"
                            placeholder="Type here..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />

                        <div className="button-group">
                            <Button
                                renderIcon={Add}
                                onClick={() => console.log('Carbon Primary Button clicked!')}
                            >
                                Add Item
                            </Button>

                            <Button
                                kind="secondary"
                                renderIcon={Save}
                                onClick={() => console.log('Carbon Secondary Button clicked!')}
                            >
                                Save
                            </Button>
                        </div>
                    </div>
                </Tile>
            </Column>

            <Column lg={8} md={4} sm={4}>
                <Tile className="demo-tile">
                    <h3>Custom Components</h3>
                    <div className="component-demo">
                        <p className="component-description">
                            Your custom components work alongside Carbon
                        </p>

                        <div className="button-group">
                            <CustomButton
                                variant="primary"
                                onClick={() => console.log('Custom Primary clicked!')}
                                content="Custom Primary"
                            />

                            <CustomButton
                                variant="secondary"
                                size="medium"
                                onClick={() => console.log('Custom Secondary clicked!')}
                                content="Custom Secondary"
                            />

                            <CustomButton
                                variant="outline"
                                size="small"
                                onClick={() => console.log('Custom Outline clicked!')}
                                content="Custom Outline"
                            />
                        </div>
                    </div>
                </Tile>
            </Column>

            <Column lg={16} md={8} sm={4}>
                <Tile className="info-tile">
                    <h3>Getting Started</h3>
                    <p>
                        This project combines the power of React, TypeScript, Vite, and IBM's Carbon Design System.
                        You can use Carbon components for enterprise-grade UI or create your own custom components.
                    </p>
                    <ul>
                        <li>🎨 Carbon Design System for consistent UI</li>
                        <li>⚡ Vite for fast development</li>
                        <li>🔷 TypeScript for type safety</li>
                        <li>💅 SCSS for powerful styling</li>
                    </ul>
                </Tile>
            </Column>
        </Grid>
    );
}
