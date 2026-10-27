"""Render the original Rich UI with explicitly illustrative counters; no fuzz run."""
from pathlib import Path
import sys
import time

root = Path(__file__).resolve().parents[1]
sys.path[:0] = [str(root / 'tmp/preview-python'), str(root / 'tmp/fuzzer')]
from rich.console import Console
from core.live_ui import RunDashboard, render_config_panel

out = root / 'tmp/project-previews'
out.mkdir(parents=True, exist_ok=True)
config = dict(target='json-decoder', scheduler_kind='ucb_tree', mutator_kind='json',
              workers=4, memory_telemetry_seconds=5, heartbeat_seconds=2,
              worker_max_jobs=1000, max_hours=None, max_iterations=5000,
              timeout=10, rng_seed=42, parser_version='base',
              isinteresting_version='base', power_scheduler_version='hybrid',
              seed_corpus_version='base')
console = Console(record=True, width=120, height=60, force_terminal=True, legacy_windows=False)
console.print('[bold]BunnyCov[/bold]  |  Configuration preview — illustrative settings')
console.print(render_config_panel(config=config, config_label='json-demo', run_index=1, total_runs=1))
console.save_svg(str(out / 'fuzzer-config.svg'), title='BunnyCov · configuration preview')
console = Console(record=True, width=180, height=60, force_terminal=True, legacy_windows=False)
dashboard = RunDashboard(target='json-decoder', configured_workers=4,
    results_folder='results/demo-preview/', max_iterations=5000, max_hours=None)
dashboard.started_at = time.monotonic() - 125
dashboard.total_results = 1250
dashboard.interesting_results = 84
dashboard.covered_branches_total = 146
dashboard.total_branches = 240
dashboard.unique_covered_arcs = 146
dashboard.coverage_backend = 'coverage.py'
dashboard.scheduler_size = 84
dashboard.queue_size = 12
dashboard.pending_jobs = 4
dashboard.busy_workers = 4
dashboard.last_event = 'coverage retained'
dashboard.last_mutated_input = '{"items": [0, -1, 2147483647], "nested": {"value": null}}'
console.print('[bold]BunnyCov[/bold]  |  UI preview — sample counters, not benchmark results')
panels = dashboard.render()
# Give the original live table enough terminal columns for its long row labels.
table = list(panels.renderables)[1].renderable
table.columns[0].ratio = None
table.columns[0].min_width = 24
table.columns[1].min_width = 18
console.print(panels)
console.save_svg(str(out / 'fuzzer-dashboard.svg'), title='BunnyCov · illustrative dashboard')
