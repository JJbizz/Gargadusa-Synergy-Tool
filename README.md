# 🗡️ Gargadusa Synergy Finder

A desktop tool for planning the most synergy-optimized parties and raid rosters for your Gargadusa adventures. Build your team template, lock in must-have classes, ban unavailable ones, and let the optimizer do the math.

---

## Installation

- **Windows** — run the `.exe` installer, follow the setup wizard
- **Mac** — open the `.dmg`, drag the app to your Applications folder
- **Linux** — make the `.AppImage` executable (`chmod +x`) then double-click or run it

---

## Overview

The app has two main tools, accessible via tabs:

- **⚔️ Single Party Finder** — Finds the best possible party compositions from a selection of classes.
- **🏰 Raid Roster Planner** — Takes your actual guild roster and divides them into multiple optimized parties at once.

---

## Team Template

The sticky panel at the top is your team template. It stays visible as you scroll so you always have context while browsing results.

**Filling slots:**
- Click any class, role, or dual-class in the roster below to snap it into the next empty slot
- Or drag and drop it directly into a specific slot
- Click the **×** on a filled slot to clear it

**Slot types:**
- **Class slot** — locks a specific class into that position (e.g. always include a Paladin)
- **Wildcard Role slot** — locks a role type without specifying the class (e.g. "any Tank")
- **Dual-Class slot** — a single adventurer who counts as two classes for synergy purposes

**Party Size** — use the dropdown at the top to set party size from 5 to 10 members. Slots already filled are preserved when you resize.

**Live Synergies Dictionary** — displayed beneath the template slots, this updates in real time as you fill slots. It shows every synergy in the game, how many of its required classes are currently in your template, and how many more are needed to activate it.

---

## Wildcard Roles

Five role types can be slotted as wildcards in the template:

| Role | Classes it accepts |
|---|---|
| 🛡️ Tank | Knight, Warrior, Paladin, Holy Knight, Stone Druid, Oath Paladin, Warden, Drunken Monk, Aegis Warden |
| 💚 Healer | Priest, Holy Paladin, Harmony Druid, Bard, Balance Monk, Tide Shaman, Arch Priest, Oracle |
| ⚔️ Melee | Monk, Rogue, Assassin, Barbarian, Crusader Paladin, Earth Shaman, Lancer, Blood Knight, Dragoon, Berserker, Hexblade |
| 🎯 Ranged | Archer, Ranger, Fire Mage, Frost Mage, Arcane Mage, Warlock, Sorcerer, Void Mage, Summoner, Beast Master, Totem Shaman, Northern Ranger, Geomancer, Chronomancer |
| 🔥 DPS | Any damage-dealing class |

Wildcard role slots tell the optimizer "fill this slot with any class of this type" rather than restricting it to one specific class.

---

## Dual-Class Adventurer Builder

An adventurer with two classes occupies one party slot but contributes both classes to every synergy calculation — effectively getting you more synergy coverage per slot.

**To create a dual-class:**
1. Open the **🔗 Dual-Class Adventurer Builder** panel (click to expand)
2. Select two different classes from the dropdowns
3. Click **🔗 Combine**

Created dual-classes appear in the list and can be slotted into the template or added to the roster just like regular classes. Use the 🗑️ button to remove a dual-class combination.

Dual-class adventurers are shared between the Single Party Finder and the Raid Roster Planner — create them once and they're available everywhere.

---

## ⚔️ Single Party Finder

This tab finds the highest-synergy party combinations from a selection of classes.

**Setting up:**
1. Set your party size at the top
2. Optionally fill some template slots to lock in required classes or roles
3. **Ban** any classes that aren't available by clicking the 🚫 icon on their card in the roster — banned classes are excluded from all results
4. Use **🚫 Ban All Roster** to ban every class at once, then manually unban only the ones you have available

**Running the optimizer:**
- Click **Find Best Raid Parties** to start the calculation

**Reading results:**
- Results are grouped into tiers by synergy score (highest first)
- Each result card shows the party composition and all active synergies
- Use the **Show Top 10 / 20 / All per Tier** dropdown to control how many results display per tier
- Click **Load Next Best Tier** to load lower-scoring tiers progressively

---

## 🏰 Raid Roster Planner

This tab takes a full list of adventurers and divides them into multiple parties, each optimized for synergy.

**Adding classes:**
- Click any class in the **Class Picker** on the left to add one to your queue (duplicates allowed)
- Click a dual-class from the Dual-Class Builder to add a dual-class adventurer
- Adventurers appear in the **Queued Roster** on the right
- Click an adventurer in the queue to remove them

**Importing from a Gargadusa save file:**
1. Click **📂 Import Save File (JSON)** and select your save file
2. The planner automatically reads all your adventurers — their names, classes, OVR ratings, and current status (questing, training, or available)
3. Occupied adventurers (currently questing or training) are flagged and can be removed from the queue with the **⚔️ Remove Questing / Raiding** or **🏋️ Remove Training** buttons

**Options:**
- **Party Size** — how many members per party (4–10)
- **Parties to fill** — leave blank to use all queued adventurers, or enter a number to form only that many parties
- **Require valid comp?** — set to "Yes" to enforce at least one Tank, one Healer, and one DPS per party; set to "No" to allow any class combination
- **⭐ Consider highest OVR in optimization** — when enabled, the planner also tries to group your highest-OVR adventurers together rather than purely maximizing synergy

**Exporting results back to your save:**
1. After optimizing, click **📁 Set Save Folder** and navigate to your Gargadusa saves folder
   - Default location: `C:\Users\YourName\AppData\Roaming\Gargadusa\Saves`
2. Choose which save slot number to export to (Save slot must be empty, the game doesn't appreciate overwriting saves from the file explorer for some reason.)
3. Click **💾 Export to Save Slot** — the file is written directly to your saves folder, ready to load in-game

---

## 💾 Saved Loadouts

The app automatically saves your session every time you make a change — your template, bans, dual-classes, and last search results are all restored when you reopen the app.

You can also save named configurations to return to later:
1. Run a search
2. Type a name in the **Name this configuration** field (e.g. "Max Holy Damage Build")
3. Click **Save Search Config**

Saved configurations appear in the list below. Click a name to restore it, or click **×** to delete it. Use **🗑️ Clear All Saved Configs** to remove everything at once.

---

## Synergy Reference

The app includes 45 synergies. Some highlights:

| Synergy | Classes Required | Min to Activate |
|---|---|---|
| Sacred Vanguard | Knight, Holy Paladin, Holy Knight, Paladin, Crusader Paladin, Oath Paladin, Aegis Warden | 3 |
| Dark Pact | Warlock, Summoner, Void Mage, Hexblade | 2 |
| Elemental Storm | Tide Shaman, Frost Mage, Fire Mage, Earth Shaman | 2 |
| Bloodlust | Barbarian, Berserker, Blood Knight | 2 |
| Divine Chorus | Priest, Arch Priest, Oracle, Bard | 2 |
| Arcane Mastery | Chronomancer, Geomancer, Sorcerer | 2 |
| Shadow Network | Assassin, Rogue | 2 |
| Wild Hunt | Beast Master, Ranger, Northern Ranger | 2 |

The full list is visible in the Live Synergies Dictionary while using the app.

---

## Keyboard Shortcuts (Desktop App)

| Shortcut | Action |
|---|---|
| `Ctrl + R` | Reload the app |
| `Ctrl + Q` | Quit |
| `Ctrl + =` | Zoom in |
| `Ctrl + -` | Zoom out |
| `Ctrl + 0` | Reset zoom |
| `F11` | Toggle fullscreen |

---

## Tips

- Use the **Team Template** to lock in classes you know you want before running the optimizer — this dramatically narrows the search and speeds up results.
- Dual-class adventurers are extremely powerful for synergy stacking. A Frost Mage + Tide Shaman dual-class alone activates Permafrost and contributes to Elemental Storm from a single party slot.
- In the Raid Roster Planner, importing your save file and enabling **⭐ Consider highest OVR** gives you the most game-ready party assignments.
- The **Hide Empty** toggle on the synergies panel is useful once your template is mostly filled — it lets you focus only on synergies you're actively building toward.
