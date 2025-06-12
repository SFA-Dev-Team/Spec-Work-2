import './sec1.css';

export default function Section1(){
    return(
        <section className="criteria-container">
             <div className="box left">
                <h2>NSCP Investment Criteria</h2>
                <p>
                We invest in businesses with niche leadership positions. When evaluating possible investments, the most important criteria we look for is differentiation: what is it about a prospect that provides superior long-term opportunities. We also thoroughly consider financial, industry and company-specific criteria. 
                </p>
                <button>Learn More</button>
            </div>
            <div className="box right">
                <h2>NSCP Value Proposition</h2>
                <p>
                <strong>For business owners</strong> seeking an exit or liquidity, NSCP structures flexible solutions.
                </p>
                <button>Partner with Us</button>
                <p>
                <strong>For buy-side and sell-side intermediaries,</strong> NSCP is an excellent partner. We are efficient when vetting businesses. When our rigorous analysis supports our commitment, we move quickly to complete the investment. 
                </p>
                <button>See Our Process</button>
            </div>

        </section>
    );
}