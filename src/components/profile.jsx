import './ styles/profile.css';

function Profile() {
    return (
        <div className="hud">
            <div className="hud-top">
                <span>◈ SYSTEM DATABASE</span>
                <span>IDENTIFICATION: 001</span>
            </div>

            <div className="hud-content">
                <div className="character">
                    <div className="portrait">
                        <img src="/assets/character-portrait.png" alt="Character portrait" />
                    </div>

                    <h2>ENFORCER</h2>
                    <p>SHADOW HUNTER</p>
                    <p>AGE: 20</p>
                    <p>GENDER: MALE</p>
                </div>

                <div className="statistics">
                    <h3>STATISTICS AND FACTS</h3>
                    <p>HEIGHT: 180 CM</p>
                    <p>DESIGNATED AS: HUNTER</p>
                    <p>BLOOD TYPE: B</p>
                    <p>FIGHTING STYLE: AGILITY</p>
                    <p>CRIME COEFFICIENT: 255.9</p>
                    <p>CLASS: HIGH-RANKER</p>
                    <p>FAVORITE FOOD: HAMBURGER</p>
                    <p>FREQUENTLY VISITS: DUNGEONS</p>
                </div>
            </div>

            <div className="hud-bottom">
                <span>SECURE DATABASE // 2049</span>
                <span>STATUS: ONLINE ●</span>
            </div>
        </div>
    );
}

export default Profile;