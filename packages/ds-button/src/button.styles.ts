import { css } from 'lit';

export const styles = css`
  :host {
    display: inline-block;
  }

  button {
    background-color: var(--ecs-atlas-color-secondary);
    padding: 4px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: 1px solid  transparent;
    border-radius: 0.25rem;
    cursor: pointer;
  }
`;
