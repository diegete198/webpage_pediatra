import { TRUST_ITEMS } from '@/constants/data';

export default function TrustBar() {
    return (
        <div className="trust-bar">
            {TRUST_ITEMS.map((item, i) => (
                <div key={i} className="trust-item">
                    <h3>{item.num}</h3>
                    <p>{item.label}</p>
                </div>
            ))}
        </div>
    );
}
