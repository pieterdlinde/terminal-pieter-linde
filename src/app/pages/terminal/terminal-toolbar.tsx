export default function TerminalToolbar(props: {onMaximizeScreen: any, onTerminalClose: any}) {
    return (<div className='flex p-1'>
        <img src="cmd.png" style={{
            marginRight: '7px',
            width: '30px',
            height: '25px'
        }}></img>

        C:\Resume\PieterLinde\resume\cmd.exe

        <div className='flex w-full origin-right justify-end'>
            <div onClick={props.onMaximizeScreen} className='cursor-pointer flex items-center origin-center justify-center rounded-sm' style={{
                marginRight: '5px',
                backgroundColor: '#ECEAD8',
                width: '22px',
                fontWeight: 'bold',
                boxShadow: '0.5px 0.5px 0.5px 0.5px rgba(0,0,0,0.35)'
            }}>
                <img src="maxwindow.png" style={{
                    width: '25px',
                    height: '20px',
                    opacity: '0.8'
                }}></img>
            </div>
            <div onClick={props.onTerminalClose} className='cursor-pointer flex items-center origin-center justify-center rounded-sm' style={{
                backgroundColor: '#ECEAD8',
                width: '22px',
                fontWeight: 'bold',
                boxShadow: '0.5px 0.5px 0.5px 0.5px rgba(0,0,0,0.35)'
            }}>
                <img src="close.png" style={{
                    width: '12px',
                    height: '12px',
                    opacity: '0.6'
                }}></img>
            </div>
        </div>
    </div>);
}
