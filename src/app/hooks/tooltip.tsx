export function Tooltip({ children, title, position }: { children?: any, title: string, position: string }) {
    return (
      <div className={`tooltip`} data-position={position} data-tool-tip={title}>
        {children}
      </div>
    );
  }