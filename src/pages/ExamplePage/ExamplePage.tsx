import { useState } from 'react';
import {
    Grid,
    Column,
    Tile,
    Form,
    Stack
} from '@carbon/react';
import { CustomButton, CustomInput } from '../../components';
import './ExamplePage.scss';

export default function ExamplePage() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <Grid>
            <Column lg={16} md={8} sm={4}>
                <div className="page-header">
                    <h1>Component Examples</h1>
                    <p className="subtitle">
                        Explore custom components and advanced usage patterns
                    </p>
                </div>
            </Column>

            <Column lg={8} md={4} sm={4}>
                <Tile className="example-tile">
                    <h3>Custom Input Component</h3>
                    <Form onSubmit={handleSubmit}>
                        <Stack gap={6}>
                            <CustomInput
                                id="username-input"
                                label="Username"
                                placeholder="Enter your username"
                                value={formData.username}
                                onChange={(value) => handleInputChange('username', value)}
                            />

                            <CustomInput
                                id="email-input"
                                label="Email"
                                type="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={(value) => handleInputChange('email', value)}
                            />

                            <CustomInput
                                id="password-input"
                                label="Password"
                                type="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={(value) => handleInputChange('password', value)}
                            />

                            <CustomButton
                                variant="primary"
                                type="submit"
                                content="Submit Form"
                            >
                            </CustomButton>
                        </Stack>
                    </Form>
                </Tile>
            </Column>

            <Column lg={8} md={4} sm={4}>
                <Tile className="example-tile">
                    <h3>Button Variations</h3>
                    <Stack gap={5}>
                        <div>
                            <h4 className="variation-title">Sizes</h4>
                            <Stack gap={3}>
                                <CustomButton variant="primary" size="small" content="Small Button" />
                                <CustomButton variant="primary" size="medium" content="Medium Button" />
                                <CustomButton variant="primary" size="large" content="Large Button" />
                            </Stack>
                        </div>

                        <div>
                            <h4 className="variation-title">Variants</h4>
                            <Stack gap={3}>
                                <CustomButton variant="primary" content="Primary" />
                                <CustomButton variant="secondary" content="Secondary" />
                                <CustomButton variant="outline" content="Outline" />
                            </Stack>
                        </div>

                        <div>
                            <h4 className="variation-title">States</h4>
                            <Stack gap={3}>
                                <CustomButton variant="primary" disabled content="Disabled Button" />
                            </Stack>
                        </div>
                    </Stack>
                </Tile>
            </Column>

            <Column lg={16} md={8} sm={4}>
                <Tile className="info-tile">
                    <h3>Usage Tips</h3>
                    <p>
                        These custom components are designed to complement the Carbon Design System
                        while providing additional flexibility and customization options.
                    </p>
                    <ul>
                        <li>✨ Custom styling with SCSS modules</li>
                        <li>🎯 TypeScript for full type safety</li>
                        <li>🔧 Flexible props for easy customization</li>
                        <li>♿ Accessibility-first design</li>
                    </ul>
                </Tile>
            </Column>
        </Grid>
    );
}
