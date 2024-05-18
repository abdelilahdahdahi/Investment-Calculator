export default function UserInput( {onChangeInput, userInputParam}) {

    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" value={userInputParam.initialInvestment} required onChange={(e) => onChangeInput('initialInvestment', e.target.value)}/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" value={userInputParam.annualInvestment} required onChange={(e) => onChangeInput('annualInvestment', e.target.value)}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" value={userInputParam.expectedReturn} required onChange={(e) => onChangeInput('expectedReturn', e.target.value)}/>
            </p>
            <p>
                <label>Duration</label>
                <input type="number" value={userInputParam.duration} required onChange={(e) => onChangeInput('duration', e.target.value)}/>
            </p>
        </div>
    </section>
}