import {
  AlarmSmoke,
  CameraOff,
  Cctv,
  CigaretteOff,
  CircleGauge,
  Clock,
  LockKeyhole,
  Moon,
  PartyPopper,
  Power,
  Trash2,
  UsersRound,
  WashingMachine,
} from 'lucide-react';

import { rulesColumns } from '../data/rulesData.js';

const iconMap = {
  clock: Clock,
  users: UsersRound,
  moon: Moon,
  'no-smoking': CigaretteOff,
  towels: WashingMachine,
  trash: Trash2,
  power: Power,
  lock: LockKeyhole,
  'smoke-alarm': AlarmSmoke,
  'co-alarm': CircleGauge,
  party: PartyPopper,
  'camera-off': CameraOff,
  'security-camera': Cctv,
};

export default function RulesSafety() {
  return (
    <section
      className="rules-safety-section"
      id="rules-safety"
    >
      <div className="rules-safety-container">
        <h2 className="rules-safety-title">
          HOUSE RULES &amp; SAFETY
        </h2>

        <div className="rules-panel">
          <div className="rules-grid">
            {rulesColumns.map((column, columnIndex) => (
              <div
                className="rules-column"
                key={`rules-column-${columnIndex}`}
              >
                {column.map((rule, ruleIndex) => {
                  const Icon = iconMap[rule.icon];

                  return (
                    <div
                      className="rule-item"
                      key={`${columnIndex}-${ruleIndex}`}
                    >
                      <span
                        className={`rule-icon ${
                          rule.prohibited
                            ? 'rule-icon-prohibited'
                            : ''
                        }`}
                        aria-hidden="true"
                      >
                        <Icon
                          size={18}
                          strokeWidth={1.5}
                        />
                      </span>

                      <div className="rule-copy">
                        <p className="rule-title">
                          {rule.title}
                        </p>

                        {rule.detail && (
                          <p className="rule-detail">
                            {rule.detail}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="rules-handbook-row">
            <button
              className="rules-handbook-button"
              type="button"
            >
              VIEW HANDBOOK
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}