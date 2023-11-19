import React, {ElementType} from 'react';
import {create, ReactTestInstance} from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component', () => {
    test('status from props shoul be in the state', () => {
        const component = create(<ProfileStatus status={'it-kamasutra.com'} updateStatus={() => {
        }}/>);
        const instance = component.getInstance();
        // @ts-ignore
        expect(instance.state.status).toBe('it-kamasutra.com');
    });

    test('after creation <span> should be displayed', () => {
        const component = create(<ProfileStatus status={'it-kamasutra.com'} updateStatus={() => {
        }}/>);
        const root = component.root
        let span: ReactTestInstance = root.findByType('span')
// @ts-ignore
        expect(span.length).not.toBeNull();
    });

    test('after creation <span> should contains correct status', () => {
        const component = create(<ProfileStatus status={'it-kamasutra.com'} updateStatus={() => {
        }}/>);
        const root = component.root
        let span = root.findByType('span')
        expect(span.children[0]).toBe('it-kamasutra.com');
    });

    test("after creation <imput> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status={'it-kamasutra.com'} updateStatus={() => {
        }}/>);
        const root = component.root
        expect(() => {
            let input = root.findByType('input')
        }).toThrow();
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status={'it-kamasutra.com'} updateStatus={() => {
        }}/>);
        const root = component.root
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe('it-kamasutra.com');
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={'it-kamasutra.com'} updateStatus={mockCallback}/>);
        const instance = component.getInstance()

        // @ts-ignore
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1);
    });

});