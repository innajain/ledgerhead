import React from 'react';

export function getUnique(arr: string[]) {
  return Array.from(new Set(arr)).filter(Boolean);
}

export function filterAccounts(accounts: { id: string; name: string; group: string }[], name: string, group: string) {
  return accounts.filter(
    acc =>
      (name === '' || acc.name === name) && (group === '' || acc.group === group)
  );
}

export function AccountSelector({
  label,
  value,
  onChange,
  accounts,
  disabled = false,
}: {
  label: string;
  value: string;
  onChange: (id: string) => void;
  accounts: { id: string; name: string; group: string }[];
  disabled?: boolean;
}) {
  // Find the selected account if value is set
  const selected = value ? accounts.find(acc => acc.id === value) : undefined;
  // If only one account, auto-select it
  const onlyOption = accounts.length === 1 ? accounts[0] : undefined;

  // Initialize name/group from value or only option, else ''
  const [name, setName] = React.useState(
    selected?.name || onlyOption?.name || ''
  );
  const [group, setGroup] = React.useState(
    selected?.group || onlyOption?.group || ''
  );

  // Dynamically filter names and groups based on the other selection
  const filteredNames = getUnique(accounts.filter(acc => group === '' || acc.group === group).map(acc => acc.name));
  const filteredGroups = getUnique(accounts.filter(acc => name === '' || acc.name === name).map(acc => acc.group));
  const filtered = filterAccounts(accounts, name, group);

  // Keep name/group in sync with value prop
  React.useEffect(() => {
    if (value && accounts.length > 0) {
      const sel = accounts.find(acc => acc.id === value);
      if (sel) {
        if (sel.name !== name) setName(sel.name);
        if (sel.group !== group) setGroup(sel.group);
      }
    }
    // If value is cleared, reset
    if (!value) {
      setName(onlyOption?.name || '');
      setGroup(onlyOption?.group || '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, accounts]);

  // Auto-select if only one possible option (excluding placeholder) is left
  React.useEffect(() => {
    if (filtered.length === 1 && filtered[0].id !== value) {
      onChange(filtered[0].id);
    }
  }, [filtered, value, onChange]);

  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        {label}
      </label>
      <div className="flex gap-2 mb-1">
        <div className="w-40">
          <select className="border rounded px-2 py-1 w-full" value={name} onChange={e => setName(e.target.value)} disabled={disabled}>
            <option value="">Name</option>
            {filteredNames.map(n => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
        <div className="w-40">
          <select className="border rounded px-2 py-1 w-full" value={group} onChange={e => setGroup(e.target.value)} disabled={disabled}>
            <option value="">Group</option>
            {filteredGroups.map(g => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
